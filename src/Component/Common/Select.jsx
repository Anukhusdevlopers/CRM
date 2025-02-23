import React, { forwardRef } from "react";
import styles from "./Select.module.css";

const Select = forwardRef(({ label, error, options, className, ...props }, ref) => {
  return (
    <div className={styles.selectContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectWrapper}>
        <select
          ref={ref}
          className={`${styles.select} ${error ? styles.error : ""} ${className || ""}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className={styles.option}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
});

export default Select;
