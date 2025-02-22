import styles from "./revenue-chart.module.css";

export const RevenueChart = ({data}) => {

  const maxValue = Math.max(...data.flatMap((d) => [d.income, d.expenses]));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h3>Revenue</h3>
          <div className={styles.amount}>$193,000</div>
          <div className={styles.change}>+35% from last month</div>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: "#0A3B2C" }}></span>
            <span>Income</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: "#4CAF50" }}></span>
            <span>Expenses</span>
          </div>
        </div>
      </div>
      <div className={styles.chart}>
        {data.map((item, index) => (
          <div key={index} className={styles.bar}>
            <div className={styles.barGroup}>
              <div
                className={styles.barValue}
                style={{ height: `${(item.income / maxValue) * 100}%`, background: "#0A3B2C" }}
              />
              <div
                className={styles.barValue}
                style={{ height: `${(item.expenses / maxValue) * 100}%`, background: "#4CAF50" }}
              />
            </div>
            <div className={styles.barLabel}>{item.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

