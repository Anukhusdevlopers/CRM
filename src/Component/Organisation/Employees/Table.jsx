import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation
import styles from "./Table.module.css";

export default function Table({ currentItems, getBadgeClass, setSidebar }) {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleMessage = (employeeId) => {
    navigate(`/organisation/messages/${employeeId}`); // ✅ Navigate to messages
  };

  return (
    <div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Employee Name</th>
              <th className={styles.tableHeader}>Phone Number</th>
              <th className={styles.tableHeader}>Department</th>
              <th className={styles.tableHeader}>Role</th>
              <th className={styles.tableHeader}>Position</th>
              <th className={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((employee) => (
              <tr key={employee.id} className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <div className={styles.employeeInfo}>
                    <img src={employee.profile_pic} alt={employee.name} className={styles.avatar} />
                    <div>
                      <div className={styles.employeeName}>{employee.name}</div>
                    </div>
                  </div>
                </td>
                <td className={styles.tableCell}>{employee.contact}</td>
                <td className={styles.tableCell}>
                  <span className={`${styles.badge} ${getBadgeClass(employee.Department)}`}>
                    {employee.Department}
                  </span>
                </td>
                <td className={styles.tableCell}>{employee.Role}</td>
                <td className={styles.tableCell}>{employee.Position}</td>
                <td className={styles.tableCell}>
                  <button className={styles.actionButton} onClick={() => handleMessage(employee.id)}>
                    Message
                  </button>
                  <button onClick={() => setSidebar(employee.id)} className={styles.actionButton}>See Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
