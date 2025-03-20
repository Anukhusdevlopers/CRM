import React, { useState, useEffect } from "react";
import styles from "./Table.module.css";

const Table = ({ data , setSelectedLead}) => {
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

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Show at most 5 page numbers

    if (totalPages <= maxPagesToShow) {
      // If we have 5 or fewer pages, show all of them
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);

      // Calculate start and end of page numbers to show
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, 4);
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - 3);
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push("...");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Contact</th>
            <th>Company</th>
            <th>Status</th>
            <th>CTA</th>
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
              <td>{item.contact}</td>
              <td>
                <div className={styles.companyCell}>
                  <span>{item.company}</span>
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status} ${
                    styles[item.status.toLowerCase()]
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  borderBottom: "1px",
                }}
              >
                <button className={styles.cta} onClick={() => setSelectedLead(item)}>Update</button>
                <button className={styles.cta}>Call</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Enhanced Pagination Controls */}
      <div className={styles.pagination}>
        <div className={styles.paginationInfo}>
          Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of{" "}
          {data.length} employees
        </div>

        <div className={styles.paginationControls}>
          <button
            className={styles.pageButton}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                className={`${styles.pageNumber} ${
                  currentPage === page ? styles.active : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            className={styles.pageButton}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
