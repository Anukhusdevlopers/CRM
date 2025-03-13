import React, { useState } from "react";
import styles from "./Grid.module.css";

export default function Grid({ data }) {
  const cardsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when data changes (e.g., after search)
  React.useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const totalPages = Math.ceil(data.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {currentData.length > 0 ? (
          currentData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.topSection}>
                <div className={styles.avatar}></div>
                <span className={styles.time}>{item.time}</span>
              </div>
              <div className={styles.amount}>{item.value}</div>
              <strong className={styles.name}>{item.name}</strong>
              <p className={styles.detail}>Contact: {item.contact}</p>
              <p className={styles.detail}>Company: {item.company}</p>
              <p className={styles.detail}>
                Status:{" "}
                <span className={`${styles.status} ${styles[item.status.toLowerCase()]}`}>
                  {item.status}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No results found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {data.length > cardsPerPage && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ⬅ Prev
          </button>

          <span className={styles.pageInfo}>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>

          <button
            className={styles.pageButton}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}
