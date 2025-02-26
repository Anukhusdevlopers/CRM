import React from 'react';
import styles from './Button.module.css';

export default function Button({ text = "Click Me", onClick, type = "button", variant = "primary", style }) {
  return (
    <div className={styles.buttonContainer}>
      <button 
        style={style}
        className={`${styles.button} ${styles[variant]}`} 
        onClick={onClick} 
        type={type}
      >
        {text}
      </button>
    </div>
  );
}
