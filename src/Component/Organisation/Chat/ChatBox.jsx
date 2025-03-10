import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import styles from "./ChatBox.module.css";

const ChatBox = ({ chatData, chats }) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    setMessages(chatData?.messages || []);
  }, [chatData]);

  useEffect(() => {
    // Scroll to the last message whenever messages update
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedMessages = [...messages, { sender: "You", text: newMessage, timestamp: "Now" }];
      setMessages(updatedMessages);
      setNewMessage("");
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <img
          className={`${chats.status === "online" ? styles.online : styles.offline}`}
          src={chats.profileImage}
          alt="Profile"
        />
        <span className={styles.chatName}>{chatData?.name || "Unknown"}</span>
      </div>
      <div className={styles.messages}>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} timestamp={msg.timestamp} />
          ))
        ) : (
          <p className={styles.noMessages}>No messages yet</p>
        )}
        {/* This empty div ensures scrolling to the last message */}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Message..."
          className={styles.input}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className={styles.sendButton} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
