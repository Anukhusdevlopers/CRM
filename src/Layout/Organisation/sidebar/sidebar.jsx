import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

const OrganisationSidebar = () => {
  const menuItems = [
    { label: "Dashboard", to: "/organisation/dashboard" },
    { label: "Employees", to: "/organisation/employees" },
    { label: "Revenue (lead)", to: "/organisation/revenue" },
    { label: "Lead Panel", to: "/organisation/lead-panel" },
    { label: "Messages", to: "/organisation/messages" },
    { label: "Campaigns", to: "/organisation/campaigns" },
  ];

  const generalItems = [
    { icon: "⚙️", label: "Settings", to: "/organisation/settings" },
    { icon: "🔒", label: "Security", to: "/organisation/security" },
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
                <Link to={item.to} className={styles.menuItem}>
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
                <Link to={item.to} className={styles.menuItem}>
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
          <img src="https://avatars.githubusercontent.com/u/165462791?u=be403d96cec1795524716356250c47b962e45e55&v=4" alt="Profile" width={40} height={40} />
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
