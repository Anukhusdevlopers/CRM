import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}></div>
        <div className={styles.content}>
          <h3 className={styles.title}>Welcome back!</h3>
          <p>Enter your cradientials to process your account</p>
        <div className={styles.outlet}>
          <Outlet />
        </div>
        </div>
      </div>
    </div>
  );
}
