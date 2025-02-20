import styles from "./transaction-list.module.css";

const transactions = [
  {
    icon: "\ud83d\udc55",
    name: "Premium T-Shirt",
    date: "Jul 12th 2024",
    id: "0JWEJS7SNC",
    status: "Completed",
  },
  {
    icon: "\ud83c\udfae",
    name: "Playstation 5",
    date: "Jul 12th 2024",
    id: "0JWEJS7SNC",
    status: "Pending",
  },
  {
    icon: "\ud83d\udc55",
    name: "Hoodie Gombeng",
    date: "Jul 12th 2024",
    id: "0JWEJS7SNC",
    status: "Pending",
  },
  {
    icon: "\ud83d\udcf1",
    name: "iPhone 15 Pro Max",
    date: "Jul 12th 2024",
    id: "0JWEJS7SNC",
    status: "Completed",
  },
];

export const TransactionList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Transaction</h3>
        <button className={styles.moreButton}>⋮</button>
      </div>
      <div className={styles.list}>
        {transactions.map((transaction, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.icon}>{transaction.icon}</div>
            <div className={styles.details}>
              <h4>{transaction.name}</h4>
              <div className={styles.meta}>
                <span>{transaction.date}</span>
                <span className={styles.id}>{transaction.id}</span>
              </div>
            </div>
            <div className={styles.status} data-status={transaction.status.toLowerCase()}>
              {transaction.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};