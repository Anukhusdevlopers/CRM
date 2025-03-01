import React, { useState, useEffect } from "react";
import styles from "./Table.module.css";

const Table = ({ data }) => {
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Reset page when data changes (e.g., after filtering/sorting)
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Contact</th>
            <th>Company</th>
            <th>Status</th>
            <th>Estimate Value</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.profileCell}>
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <span>{item.time}</span>
                  </div>
                </div>
              </td>
              <td>{item.email}</td>
              <td>
                <div className={styles.companyCell}>
                  <span>{item.company}</span>
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles[item.status.toLowerCase()]}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
           Previous 
        </button>

        <span className={styles.pageInfo}>
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>

        <button
          className={styles.pageButton}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
