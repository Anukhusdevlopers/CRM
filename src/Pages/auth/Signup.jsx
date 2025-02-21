import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Signup.module.css";

export default function Signup() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}></div>
        <div className={styles.content}>
          <h3 className={styles.title}>Get Started Now</h3>
          <p>Enter your cradientials to process your account</p>
        <div className={styles.outlet}>
          <Outlet />
        </div>
        </div>
      </div>
    </div>
  );
}
