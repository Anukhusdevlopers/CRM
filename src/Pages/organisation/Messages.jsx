import React, { useState } from "react";
import styles from "./Messges.module.css";
import { ChatData, Chats } from "../../constants";
import Chat from "../../Component/Organisation/Chat/Chat";
import ChatBox from "../../Component/Organisation/Chat/ChatBox";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);

  const selectedChats = Chats.find((chat) => chat.id === selectedChat);
  const selectedChatData = ChatData.find((chat) => chat.id === selectedChat);
  console.log(selectedChatData);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <h3>Messages</h3>
        </div>
        <div className={styles.body}>
          {ChatData.map((chat) => (
            <div key={chat.id} onClick={() => setSelectedChat(chat.id)}>
              <Chat data={chat} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Only render ChatBox if a chat is selected */}
      <div>
        {selectedChatData ? (
          <ChatBox chats={selectedChatData} chatData={selectedChats} />
        ) : (
          <div className={styles.emptyChatBox}>
          <div className={styles.illustration}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H8l-5 5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3 className={styles.emptyTitle}>No Conversation Selected</h3>
          <p className={styles.emptySubtitle}>Pick a chat to start messaging with your friends.</p>
        </div>
        
        )}
      </div>

    </div>
  );
}
