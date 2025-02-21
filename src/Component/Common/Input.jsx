import React, { useState } from 'react';
import styles from './Input.module.css';

export default function Input({ placeholder, label, customStyles, onChange }) {
  const [value, setValue] = useState("");

  const inputId = label ? label.toLowerCase().replace(/\s+/g, '-') : 'input';

  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <input
        id={inputId}
        className={styles.input}
        style={customStyles}
        placeholder={placeholder || ""}
        type="text"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
