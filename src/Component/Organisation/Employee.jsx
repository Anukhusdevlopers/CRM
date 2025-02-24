import styles from "./Employee.module.css";

const Employee = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h4>Total Employee</h4>
        <div className={styles.threedots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      <div className={styles.body}>
        <h3>324</h3>
        <div></div>
      </div>
    </div>
  );
};

export default Employee;