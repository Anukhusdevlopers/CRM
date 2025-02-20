import styles from "./sales-report.module.css";

export const SalesReport = () => {
  const data = [
    { label: "Product Launched", value: 233, color: "#4CAF50" },
    { label: "Ongoing Product", value: 123, color: "#2196F3" },
    { label: "Product Sold", value: 482, color: "#FFA726" },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Sales Report</h3>
        <button className={styles.moreButton}>⋮</button>
      </div>
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

