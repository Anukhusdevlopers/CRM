import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";

export default function AuthLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <Outlet />
      </div>
      <div className={styles.right}>

      </div>
    </div>
  );
}
