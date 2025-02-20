import React from "react";
import "./Solution.css";
import logo from "../../assets/logo.png";

const Solution = () => {
  return (
    <div className="solution-section">
      <div className="plan-btn">
        <span>Solutions</span>
      </div>
      <div className="solution-header">
        <h2>Build a solution <br /> that's truly your own.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos iure
          nesciunt dolorem commodi adipisci. Earum culpa nulla soluta. Lorem
          ipsum dolor sit amet.
        </p>
      </div>

      <div className="solution-content">
        <div className="left-card"></div>
        <div className="steps-container">
          {["Business CRM", "Marketing Automation", "Sales Pipeline"].map(
            (title, index) => (
              <div
                className={`step ${index === 1 ? "active-step" : ""}`}
                key={index}
              >
                <img src={logo} className="step-logo" alt={title} />
                <div className="step-text">
                  <h4>{title}</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor reprehenderit ab placeat in magni sapiente!
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Solution;
