import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import TypesEOrO from "../../../Component/Home/TypesEOrO";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false); 
  const [signupPopUp, setSignupPopUp] = useState(false);
  const popupRef = useRef(null);

  const handleToggle = () => setToggle((prev) => !prev);

  const handleBothButton = (e, actionType) => {
    e.preventDefault();
    setToggle(false);
    if (actionType === "login") {
      setLoginPopUp((prev) => !prev);
      setSignupPopUp(false);
    } else {
      setSignupPopUp((prev) => !prev);
      setLoginPopUp(false);
    }
  };

  // Close the popup when clicking outside or on the same button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !event.target.closest(".trigger-button")
      ) {
        setLoginPopUp(false);
        setSignupPopUp(false);
      }
    };

    if (loginPopUp || signupPopUp) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginPopUp, signupPopUp]);

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
              className="trigger-button"
              style={{
                background: "#fff",
                border: "2px solid #e1e1e1",
                color: "#100a30",
              }}
              onClick={(e) => handleBothButton(e, "login")}
            >
              Login
            </button>
            <button
              className="trigger-button"
              style={{
                background: "linear-gradient(to right, rgb(7, 53, 48), #0b4a44)",
                color: "#fff",
              }}
              onClick={(e) => handleBothButton(e, "signup")}
            >
              Sign Up <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>
      </nav>  

      {/* Popups (Wrapped in ref for click detection) */}
      {(loginPopUp || signupPopUp) && (
        <div ref={popupRef}>
          {loginPopUp && (
            <TypesEOrO
              title="Login as:"
              button1="Organisation"
              link1={"/auth/login/organisation"}
              link2={"/auth/login/employee"}
              onClose={() => setLoginPopUp(false)}
              button2="Employee"
            />
          )}

          {signupPopUp && (
            <TypesEOrO
              title="Sign up as:"
              link1={"/auth/signup/organisation"}
              button1="Organisation"
              onClose={() => setSignupPopUp(false)}
            />
          )}
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
              onClick={(e) => handleBothButton(e, "login")}
            >
              Login
            </button>
            <button
              className="trigger-button"
              style={{ background: "linear-gradient(to right, rgb(7, 53, 48), #0b4a44)", color: "#fff" }}
              onClick={(e) => handleBothButton(e, "signup")}
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