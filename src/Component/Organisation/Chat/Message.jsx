import React from "react";
import styles from "./ChatBox.module.css";

const Message = ({ sender, text, timestamp }) => {
  const isUser = sender === "You";

  return (
    <div className={`${styles.messageWrapper} ${isUser ? styles.userMessage : styles.friendMessage}`}>
      <div className={styles.messageBubble}>{text}</div>
      <span className={styles.timestamp}>{timestamp}</span>
    </div>
  );
};

export default Message;
