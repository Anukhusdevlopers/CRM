import styles from "./performance-chart.module.css";

export const PerformanceChart = ({ data }) => {
  const { totalCount, breakdown } = data;

  // Convert percentage strings (e.g., "6%") to numbers
  let segments = [
    { label: "View Count", value: parseFloat(breakdown.viewCount), color: "#4CAF50" },
    { label: "Percentage", value: parseFloat(breakdown.percentage), color: "#2196F3" },
    { label: "Sales", value: parseFloat(breakdown.sales), color: "#FFA726" },
  ];

  // Ensure each segment has at least 5% visibility (adjust small values)
  const totalValue = segments.reduce((acc, seg) => acc + seg.value, 0);
  const minVisible = 5;
  const adjustedSegments = segments.map((seg) => ({
    ...seg,
    value: Math.max(seg.value, minVisible),
  }));

  // Recalculate total after adjustments
  const adjustedTotal = adjustedSegments.reduce((acc, seg) => acc + seg.value, 0);

  // Calculate stroke-dasharray and offsets
  let cumulativePercent = 0;
  const circles = adjustedSegments.map((segment, index) => {
    const percentage = (segment.value / adjustedTotal) * 100;
    const dashArray = `${(percentage * 251.2) / 100} ${251.2 - (percentage * 251.2) / 100}`;
    const dashOffset = (cumulativePercent * 251.2) / 100;
    cumulativePercent += percentage;

    return (
      <circle
        key={index}
        cx="50"
        cy="50"
        r="40"
        className={styles.progress}
        stroke={segment.color}
        strokeDasharray={dashArray}
        strokeDashoffset={-dashOffset}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Total View Performance</h3>
      </div>

      <div className={styles.chart}>
        {/* Donut Chart */}
        <div className={styles.donut}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" className={styles.background} />
            {circles}
          </svg>

          <div className={styles.center}>
            <div className={styles.value}>{totalCount.toLocaleString()}</div>
            <div className={styles.label}>Total Count</div>
          </div>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          {segments.map((item, index) => (
            <div key={index} className={styles.legendItem}>
              <span className={styles.dot} style={{ background: item.color }}></span>
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
