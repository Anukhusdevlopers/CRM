import styles from "./transaction-list.module.css";

export const TransactionList = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Transaction</h3>
        <button className={styles.moreButton}>⋮</button>
      </div>
      <div className={styles.list}>
      {data.map((transaction, index) => (
  <div key={index} className={styles.item}>
    <div className={styles.icon}>{transaction.icon}</div>
    <div className={styles.details}>
      <h4>{transaction.item}</h4> {/* Updated from transaction.name to transaction.item */}
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
