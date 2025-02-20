import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (

    <div>
     

      <header className="header-section">
        <h1>One smart solution tool for your business</h1>
        <p>CRM that works for you, not the other way around it's lightweight, customizable, and powered by AI</p>
        <div className="button-container" style={{ display: 'flex', gap: '16px' }}>
          <button style={{ background: "linear-gradient(to right,rgb(7, 53, 48),#0b4a44)", color: '#fff' }}>Start Free Now</button>
          <button style={{ background: '#fff', border: '2px solid #e1e1e1', color: '#100a30' }}><i style={{ fontSize: '1.8rem' }} className="ri-play-circle-fill"></i> Watch Demo</button>
        </div>
      </header>

    </div>
  );
};

export default Header;