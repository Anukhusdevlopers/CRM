import React from 'react';
import styles from './Input.module.css';

export default function Input({ placeholder, label, customStyles, onChange, name, value, type = "text" }) {
  const inputId = label ? label.toLowerCase().replace(/\s+/g, '-') : 'input';

  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <input
        id={inputId}
        className={styles.input}
        style={customStyles}
        placeholder={placeholder || ""}
        type={type} // Supports text, password, etc.
        name={name} // Ensure name is passed for correct form handling
        onChange={onChange}
        value={value} // Controlled input: value comes from props
      />
    </div>
  );
}
