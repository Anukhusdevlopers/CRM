import React from 'react';
import styles from './Button.module.css';

export default function Button({ text = "Click Me", onClick, type = "button", variant = "primary" }) {
  return (
    <div className={styles.buttonContainer}>
      <button 
        className={`${styles.button} ${styles[variant]}`} 
        onClick={onClick} 
        type={type}
      >
        {text}
      </button>
    </div>
  );
}
