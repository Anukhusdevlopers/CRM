import styles from "./metrics-cards.module.css";

export const MetricsCards = () => {
  return (
    <div className={styles.metrics}>
      <div className={styles.updateCard}>
        <span className={styles.label}>Update</span>
        <p className={styles.date}>Feb 12th 2024</p>
        <h3>Sales revenue increased 40% in 1 week</h3>
        <a href="/statistics" className={styles.link}>
          See Statistics →
        </a>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.card}>
          <h3>Net Income</h3>
          <div className={styles.amount}>$193,000</div>
          <div className={`${styles.change} ${styles.positive}`}>+35% from last month</div>
        </div>

        <div className={styles.card}>
          <h3>Total Return</h3>
          <div className={styles.amount}>$32,000</div>
          <div className={`${styles.change} ${styles.negative}`}>-24% from last month</div>
        </div>
      </div>
    </div>
  );
};

