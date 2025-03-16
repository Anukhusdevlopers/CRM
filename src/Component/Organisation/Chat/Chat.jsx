import React from "react";
import styles from "./Chat.module.css";

export default function Chat({ data }) {
  // Get the last message from the chat's messages array
  const lastMessage = data.messages?.length
    ? data.messages[data.messages.length - 1].text
    : "No messages yet";

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatItem}>
        <img
          src={data.profile_pic}
          alt={data.name}
          className={styles.profileImage}
          style={{
            borderColor: data.online ? "#4CAF50" : "#B0B0B0",
          }}
        />
        <div className={styles.chatDetails}>
          <h4 className={styles.chatName}>{data.name}</h4>
          <p className={styles.lastMessage}>{lastMessage}</p>
        </div>
      </div>
    </div>
  );
}
