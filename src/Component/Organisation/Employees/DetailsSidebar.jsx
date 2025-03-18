import React from "react";
import styles from "./Sidebar.module.css";
import { Mail, Phone, User, Cake, MapPin, GraduationCap, School, Clipboard } from "lucide-react";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {/* Personal Information */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Personal Information</h3>
        <div className={styles.infoRow}>
          <Mail className={styles.icon} />
          <span className={styles.email}>kristisipes@gmail.com</span>
        </div>
        <div className={styles.infoRow}>
          <Phone className={styles.icon} />
          <span>+62-921-019-112</span>
        </div>
        <div className={styles.infoRow}>
          <User className={styles.icon} />
          <span>Female</span>
        </div>
        <div className={styles.infoRow}>
          <Cake className={styles.icon} />
          <span>May 20, 2000</span>
        </div>
        <div className={styles.infoRow}>
          <MapPin className={styles.icon} />
          <span>New York, NY, 10001, United States</span>
        </div>
      </div>

      {/* Education Information */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Education Information</h3>
        <div className={styles.infoRow}>
          <School className={styles.icon} />
          <span>Boston University</span>
        </div>
        <div className={styles.infoRow}>
          <GraduationCap className={styles.icon} />
          <span>Bachelor of Engineering</span>
        </div>
        <div className={styles.infoRow}>
          <Clipboard className={styles.icon} />
          <span>Year Graduation: 2014</span>
        </div>
      </div>

      {/* Notes Section */}
      <div className={styles.notes}>
        <h3 className={styles.sectionTitle}>Notes</h3>
        <textarea className={styles.noteInput} placeholder="Write note..."></textarea>
      </div>
    </div>
  );
}
