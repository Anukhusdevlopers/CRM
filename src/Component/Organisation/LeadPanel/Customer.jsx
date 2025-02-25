import styles from "./Customer.module.css";
import React from "react";

export default function Customer() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h4>Total Customer</h4>
        <div className={styles.threedots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      <div className={styles.body}>
        <h3>829</h3>
        <span>
            +15%
        </span>
      </div>
    </div>
  );
}
