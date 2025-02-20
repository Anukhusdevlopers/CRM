import styles from "./performance-chart.module.css";

export const PerformanceChart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Total View Performance</h3>
      </div>
      <div className={styles.chart}>
        <div className={styles.donut}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" className={styles.background} />
            <circle cx="50" cy="50" r="40" className={styles.progress} style={{ "--percent": "68" }} />
          </svg>
          <div className={styles.center}>
            <div className={styles.value}>565K</div>
            <div className={styles.label}>Total Count</div>
          </div>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: "#4CAF50" }}></span>
            <span>View Count</span>
            <span>68%</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: "#2196F3" }}></span>
            <span>Percentage</span>
            <span>23%</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: "#FFA726" }}></span>
            <span>Sales</span>
            <span>16%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

;