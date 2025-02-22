import React from 'react'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
            <div className={styles.headerLeft}>
              <h1>Organisation Dashboard</h1>
              <span className={styles.chevron}>▼</span>
            </div>
    
            <div className={styles.headerRight}>
              <div className={styles.search}>
                <input type="search" placeholder="Search anything in Siohioma..." />
                <button type="submit">🔍</button>
              </div>
              <button className={styles.iconButton}>📋</button>
              <button className={styles.iconButton}>⚙️</button>
              <button className={styles.addButton}>
                Add new product
                <span>+</span>
              </button>
            </div>
          </header>
  )
}
