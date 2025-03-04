import { useState, useEffect } from "react";
import styles from "./ActionSearchBar.module.css";

function ActionSearchBar({ allActions, onChange , label, placeholder}) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(allActions);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResult(allActions);
    } else {
      const normalizedQuery = query.toLowerCase();
      setResult(
        allActions.filter((action) =>
          action.label.toLowerCase().includes(normalizedQuery)
        )
      );
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        {
          label &&
        <label htmlFor="search" className={styles.label}>{label}</label>
        }
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="search"
            placeholder={placeholder || ""}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className={styles.input}
          />
        </div>
      </div>

      {isFocused && result.length > 0 && (
        <div className={styles.dropdown}>
          <ul className={styles.list}>
            {result.map((action) => (
              <li 
                key={action.id} 
                className={styles.listItem} 
                onMouseDown={() => {
                  setQuery(action.label);
                  setIsFocused(false);
                  onChange(action.label); // 🔹 Call onChange with the selected country
                }}
              >
                <div className={styles.itemContent}>
                  <span className={styles.actionLabel}>{action.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ActionSearchBar;
