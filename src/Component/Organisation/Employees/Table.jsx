import React from 'react'
import styles from './Table.module.css'

export default function Table({currentItems , getBadgeClass}) {
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
                    <img src={employee.avatar} alt={employee.name} className={styles.avatar} />
                    <div>
                      <div className={styles.employeeName}>{employee.name}</div>
                      <div className={styles.employeeEmail}>{employee.email}</div>
                    </div>
                  </div>
                </td>
                <td className={styles.tableCell}>{employee.phone}</td>
                <td className={styles.tableCell}>
                  <span className={`${styles.badge} ${getBadgeClass(employee.department)}`}>
                    {employee.department}
                  </span>
                </td>
                <td className={styles.tableCell}>{employee.role}</td>
                <td className={styles.tableCell}>{employee.position}</td>
                <td className={styles.tableCell}>
                  <button className={styles.actionButton}>Message</button>
                  <button className={styles.actionButton}>See Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
