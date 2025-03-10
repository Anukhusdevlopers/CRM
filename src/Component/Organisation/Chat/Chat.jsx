import React from "react";
import styles from "./Chat.module.css";

export default function Chat({ data }) {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatItem}>
        <img
          src={data.profileImage}
          alt={data.name}
          className={styles.profileImage}
          style={{
            borderColor: data.status === "online" ? "#4CAF50" : "#B0B0B0",
          }}
        />
        <div className={styles.chatDetails}>
          <h4 className={styles.chatName}>{data.name}</h4>
          <p className={styles.lastMessage}>{data.lastMessage}</p>
        </div>
      </div>
    </div>
  );
}
