import React from "react";
import styles from "./LeadPanel.module.css";
import TotalEstimate from "../../Component/Organisation/TotalEstimate";
import Customer from "../../Component/Organisation/Customer";
import Employee from "../../Component/Organisation/Employee";
export default function LeadPanel() {
  return (
    <div className={styles.leadpanel}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.left}>
            <h2>Lead Panel</h2>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.right}>
            <button>Share</button>
            <button>+ Create New</button>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
          </div>
        </div>

        <div className={styles.total}>
          <div className={styles.estimate}>
            <TotalEstimate />
          </div>
          <div className={styles.customerAndEmployee}>
            <Customer />
            <Employee />
          </div>
        </div>

        <div className={styles.tables}>
          <div className={styles.tablehead}>
            <div className={styles.top}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.bottom}>
              <div>
                <input type="text" />
                <span>import</span>
                <div>
                  <button></button>
                  <button></button>
                </div>
                <div>
                  <select name="" id=""></select>
                </div>
              </div>
              <div>
                <button>filter</button>
              </div>
            </div>
          </div>
          <div className={styles.tablebody}></div>
        </div>
      </div>
    </div>
  );
}
