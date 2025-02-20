import styles from "./main-content.module.css";
import { MetricsCards } from "../../Component/Organisation/metrics-cards.jsx";
import { TransactionList } from "../../Component/Organisation/transaction-list.jsx";
import { RevenueChart } from "../../Component/Organisation/revenue-chart.jsx";
import { SalesReport } from "../../Component/Organisation/sales-report.jsx";
import { PerformanceChart } from "../../Component/Organisation/performance-chart.jsx";

const MainContent = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>Organisation Dashboard</h1>
          <span className={styles.chevron}>▼</span>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.search}>
            <input type="search" placeholder="Search anything in Siohioma..." />
            <button type="submit">🔍</button>
          </div>
          <button className={styles.iconButton}>📋</button>
          <button className={styles.iconButton}>⚙️</button>
          <button className={styles.addButton}>
            Add new product
            <span>+</span>
          </button>
        </div>
      </header>

      <div className={styles.dashboard}>
        <div className={styles.dashboardHeader}>
          <div>
            <h2>Dashboard</h2>
            <p>An any way to manage sales with care and precision.</p>
          </div>
          <div className={styles.dateRange}>
            <span>January 2024 - May 2024</span>
            <span className={styles.chevron}>▼</span>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <MetricsCards />
            <TransactionList />
          </div>
          <div className={styles.rightColumn}>
            <PerformanceChart />
            <div className={styles.charts}>
              <RevenueChart />
              <SalesReport />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
