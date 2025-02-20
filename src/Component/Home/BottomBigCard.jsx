import React from "react";
import "./BottomBigCard.css";

const BottomBigCard = () => {
  return (
    <div className="card-container">
      <div className="big-card">
        <h1>Let's get you growing. Without the pains.</h1>
        <p>
          CRM that works for you, not the other way around. It's lightweight
          and customizable.
        </p>
        <div className="button-group">
          <button className="primary-btn">Start Free Now</button>
          <button className="secondary-btn">
            Contact Sales <i className="ri-arrow-right-up-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBigCard;
