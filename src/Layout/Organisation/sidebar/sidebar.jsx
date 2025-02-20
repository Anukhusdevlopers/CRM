import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

const OrganisationSidebar = () => {
  const menuItems = [
    { icon: "📊", label: "Overview", href: "/" },
    { icon: "📈", label: "Statistics", href: "/statistics" },
    { icon: "👥", label: "Customers", href: "/customers" },
    { icon: "📦", label: "Product", href: "/product" },
    { icon: "💬", label: "Messages", href: "/messages", badge: "11" },
    { icon: "💳", label: "Transactions", href: "/transactions" },
  ];

  const generalItems = [
    { icon: "⚙️", label: "Settings", href: "/settings" },
    { icon: "🔒", label: "Security", href: "/security" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>✨</span>
        <h1>CRM</h1>
      </div>

      <nav className={styles.navigation}>
        <div className={styles.section}>
          <h2>MENU</h2>
          <ul>
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.menuItem}>
                  <span className={styles.icon}>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && <span className={styles.badge}>{item.badge}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>GENERAL</h2>
          <ul>
            {generalItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.menuItem}>
                  <span className={styles.icon}>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src="/placeholder.svg" alt="Profile" width={40} height={40} />
        </div>
        <div className={styles.profileInfo}>
          <h3>Fandaww Punx</h3>
          <p>fandaww@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default OrganisationSidebar;
