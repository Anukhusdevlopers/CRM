import React from 'react';
import styles from './Input.module.css';

export default function Input({ placeholder, label, customStyles, onChange, name, value }) {
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
        name={name} // Ensure name is passed for proper form handling
        onChange={onChange}
        value={value} // Controlled input: value comes from props
      />
    </div>
  );
}
