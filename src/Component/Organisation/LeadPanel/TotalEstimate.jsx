import React from "react";
import styles from "./TotalEstimate.module.css";
export default function TotalEstimate() {
  const now = new Date();

  const data = [
    {
      value: "$ 32.1k",
      status: "Accepted",
      color : "green"
    },
    {
      value: "$ 16.23k",
      color : "yellow",
      status: "Pending",
    },
    {
      value: "$ 2.58k",
      color : "red",
      status: "Canceled",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h4>Total Estimate</h4>
        <div className={styles.threedots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      <div className={styles.body}>
        {data.map((item, index) => (
          <div key={index}>
            <h3>{item.value}</h3>
            <span style={{color: item.color}} >{item.status}</span>
          </div>
        ))}
        <div className={styles.time}>
          <span style={{fontWeight: "bold"}}>
            {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
          <span>
            {now.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
