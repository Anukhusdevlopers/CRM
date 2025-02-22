import styles from "./Dashboard.module.css";
import { MetricsCards } from "../../Component/Organisation/metrics-cards.jsx";
import { TransactionList } from "../../Component/Organisation/transaction-list.jsx";
import { RevenueChart } from "../../Component/Organisation/revenue-chart.jsx";
import { SalesReport } from "../../Component/Organisation/sales-report.jsx";
import { PerformanceChart } from "../../Component/Organisation/performance-chart.jsx";

const Dashboard = () => {


  const dashboardData = {
    metric: {
      update: {
        date: "Feb 12th 2024",
        message: "Sales revenue increased 40% in 1 week",
        link: "See Statistics",
      },
      netIncome: {
        amount: 193000,
        change: "+35%",
        direction: "up",
      },
      totalReturn: {
        amount: 32000,
        change: "-24%",
        direction: "down",
      },
    },
    transactions: [
      { id: 1, item: "Premium T-Shirt", status: "Completed", date: "Jul 12th 2024", ref: "QJWEJ57SNC", icon: "👕" },
      { id: 2, item: "PlayStation 5", status: "Pending", date: "Jul 12th 2024", ref: "QJWEJ57SNC", icon: "🎮" },
      { id: 3, item: "Hoodie Gombrong", status: "Pending", date: "Jul 12th 2024", ref: "QJWEJ57SNC", icon: "🧥" },
      { id: 4, item: "iPhone 15 Pro Max", status: "Completed", date: "Jul 12th 2024", ref: "QJWEJ57SNC", icon: "📱" },
      { id: 5, item: "Lotse", status: "Completed", date: "Jul 12th 2024", ref: "QJWEJ57SNC", icon: "📦" },
      { id: 6, item: "Starbucks", status: "Completed", date: "Jul 12th 2024", ref: "QJWEJ57SNC", icon: "☕" },
      { id: 7, item: "Tinek Destar T-Shirt", status: "Completed", date: "Jul 12th 2024", ref: "QJWEJ57SNC", icon: "👚" },
    ],
    revenue:  [
      { month: "Jan", income: 12000, expenses: 8000 },
      { month: "Feb", income: 15000, expenses: 9000 },
      { month: "Mar", income: 14000, expenses: 9500 },
      { month: "Apr", income: 18000, expenses: 12000 },
      { month: "May", income: 22000, expenses: 14000 },
      { month: "Jun", income: 25000, expenses: 16000 },
    ],
    salesReport: [
      { label: "Electronics", value: 120000, color: "#4CAF50" },
      { label: "Furniture", value: 95000, color: "#FF9800" },
      { label: "Clothing", value: 78000, color: "#2196F3" },
      { label: "Books", value: 45000, color: "#9C27B0" },
      { label: "Accessories", value: 60000, color: "#E91E63" },
    ],
    analytics: {
      totalCount: 565000,
      breakdown: {
        viewCount: "57%",
        percentage: "33%",
        sales: "10%",
      },
    },
  };
  
 

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
            <MetricsCards data={dashboardData.metric} />
            <TransactionList data={dashboardData.transactions} />
          </div>
          <div className={styles.rightColumn}>
            <PerformanceChart data={dashboardData.analytics} />
            <div className={styles.charts}>
              <RevenueChart data={dashboardData.revenue} />
              <SalesReport data={dashboardData.salesReport} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
