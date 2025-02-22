import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import TypesEOrO from "../../../Component/Home/TypesEOrO";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => setToggle((prev) => !prev);

  // Toggle login popup when clicking the login button
  const handleLoginClick = (e) => {
    e.preventDefault();
    setToggle(false); 
    setLoginPopUp((prev) => !prev);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate("/auth/signup/organisation");
  };

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        event.target.id !== "login-button"
      ) {
        setLoginPopUp(false);
      }
    };

    if (loginPopUp) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginPopUp]);

  return (
    <>
      <nav style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="navbar">
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <img style={{ scale: 0.7 }} src={logo} alt="Logo" />
            <h1 style={{ color: "#100a30" }}>CRM+</h1>
          </div>

          <div className="center-part">
            <Link to="/">Solution <i className="ri-arrow-down-s-line"></i></Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/company">Company</Link>
          </div>

          <button onClick={handleToggle} className={toggle ? "menuactive" : "menuicon"}>
            <div className="lines"></div>
            <div className="lines"></div>
          </button>

          <div className="right-part">
            <button
              id="login-button"
              className="trigger-button"
              style={{
                background: "#fff",
                border: "2px solid #e1e1e1",
                color: "#100a30",
              }}
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              className="trigger-button"
              style={{
                background: "linear-gradient(to right, rgb(7, 53, 48), #0b4a44)",
                color: "#fff",
              }}
              onClick={handleSignupClick}
            >
              Sign Up <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Login Popup */}
      {loginPopUp && (
        <div ref={popupRef} className="login-popup">
          <TypesEOrO
            link1title="Organisation"
            link2title="Employee"
            title="Login"
            link1Text="Login as Organisation"
            link1="/auth/login/organisation"
            link2Text="Login as Employee"
            link2="/auth/login/employee"
          />
        </div>
      )}

      {toggle && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="#" className="mobile-menu-link">Solution</Link></li>
            <li><Link to="#" className="mobile-menu-link">Pricing</Link></li>
            <li><Link to="#" className="mobile-menu-link">Blog</Link></li>
            <li><Link to="#" className="mobile-menu-link">Company</Link></li>
          </ul>

          <div className="mobile-button-container">
            <button
              className="trigger-button"
              style={{ background: "#fff", border: "2px solid #e1e1e1", color: "#100a30" }}
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              className="trigger-button"
              style={{ background: "linear-gradient(to right, rgb(7, 53, 48), #0b4a44)", color: "#fff" }}
              onClick={handleSignupClick}
            >
              Sign Up <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
