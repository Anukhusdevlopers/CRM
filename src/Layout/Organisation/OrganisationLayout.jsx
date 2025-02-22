import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import OrganisationSideBar from "./sidebar/sidebar";
import styles from './OrganisationLayout.module.css';
import Header from "./sidebar/header";

export default function OrganisationLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
      if (window.innerWidth > 650) {
        setIsSidebarOpen(false); // Close sidebar when resizing to larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      {/* Menu Icon (Only for Small Screens) */}
      {isMobile && (
        <button
          className={isSidebarOpen ? styles.closeButton : styles.menuButton}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      )}

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <OrganisationSideBar />
      </div>

      {/* Main Content */}
      <div className={styles.outlet} onClick={() => setIsSidebarOpen(false)}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
