import styles from "./metrics-cards.module.css";

export const MetricsCards = ({ data }) => {
  if (!data) return <p>Loading...</p>;

  const { update, netIncome, totalReturn } = data;

  return (
    <div className={styles.metrics}>
      {/* Update Section */}
      <div className={styles.updateCard}>
        <span className={styles.label}>Update</span>  
        <p className={styles.date}>{update.date}</p>
        <h3>{update.message}</h3>
        <a href="/statistics" className={styles.link}>
          {update.link} →
        </a>
      </div>

      {/* Metrics Grid */}
      <div className={styles.metricsGrid}>
        <MetricCard
          title="Net Income"
          amount={netIncome.amount}
          change={netIncome.change}
          isPositive={netIncome.direction === "up"}
        />

        <MetricCard
          title="Total Return"
          amount={totalReturn.amount}
          change={totalReturn.change}
          isPositive={totalReturn.direction === "up"}
        />
      </div>
    </div>
  );
};

// Reusable Metric Card Component
const MetricCard = ({ title, amount, change, isPositive }) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <div className={styles.amount}>${amount.toLocaleString()}</div>
    <div className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
      {change} from last month
    </div>
  </div>
);
