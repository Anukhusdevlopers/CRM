import React from "react";
import styles from "./Grid.module.css";

export default function Grid({data}) {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.topSection}>
              <div className={styles.avatar}></div>
              <span className={styles.time}>{item.time}</span>
            </div>
            <div className={styles.amount}>{item.value}</div>
            <strong className={styles.name}>{item.name}</strong>
            <p className={styles.detail}>Email: {item.email}</p>
            <p className={styles.detail}>Company: {item.company}</p>
            <p className={styles.detail}>Status: <span className={`${styles.status} ${styles[item.status.toLowerCase()]}`}>{item.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

