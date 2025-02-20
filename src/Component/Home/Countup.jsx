import React from "react";
import CountUp from "react-countup";
import "./Countup.css";

const stats = [
  { value: 12, suffix: "+", label: "Years Of Experience" },
  { value: 286, suffix: "%", label: "Average ROI" },
  { value: 25, suffix: "M", label: "Net Present Value" },
  { value: 20, suffix: "+", label: "Markets Served" },
];

const Countup = () => {
  return (
    <div className="count-up-container">
      {stats.map((stat, index) => (
        <div className="count-up-box" key={index}>
          <h2>
            <CountUp end={stat.value} duration={2.5} />{stat.suffix}
          </h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Countup;
