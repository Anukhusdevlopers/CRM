import React from "react";
import styles from "./sales-report.module.css";

export const SalesReport = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h3>Sales Report</h3>
        <button className={styles.moreButton}>⋮</button>
      </div>

      {/* Chart */}
      <div className={styles.chart}>
        {data.map((item, index) => (
          <div key={index} className={styles.bar}>
            <div className={styles.barLabel}>{item.label}</div>
            <div className={styles.barTrack}>
              <div
                className={styles.barValue}
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  background: item.color,
                }}
              />
            </div>
            <div className={styles.barAmount}>({item.value})</div>
          </div>
        ))}
      </div>
    </div>
  );
};
