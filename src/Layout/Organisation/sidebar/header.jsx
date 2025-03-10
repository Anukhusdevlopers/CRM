import React from "react";
import styles from "./header.module.css";
import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>Organisation</h1>
      </div>

      <div className={styles.headerRight}>
        <button className={styles.iconButton}>
        <Bell size={20} />
        </button>
       
      </div>
    </header>
  );
}
