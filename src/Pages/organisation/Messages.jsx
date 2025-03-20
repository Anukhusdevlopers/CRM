import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Messages.module.css";
import Data from "../../constants/leadpanel-data.json";
import Chat from "../../Component/Organisation/Chat/Chat";
import ChatBox from "../../Component/Organisation/Chat/ChatBox";

export default function Messages() {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window resize
  console.log(windowWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Find selected chat data
  const selectedChatData = Data.find((chat) => chat.id === parseInt(chatId));

  return (
    <div className={styles.container}>
      {/* Chat List */}
      { windowWidth <=1000 ?  !selectedChatData && (
        <div className={styles.chatList}>
          <div className={styles.header}>
            <h3>Messages</h3>
          </div>
          <div className={styles.body}>
            {Data.map((chat) => (
              <div
                key={chat.id}
                onClick={() => navigate(`/organisation/messages/${chat.id}`)}
              >
                <Chat data={chat} />
              </div>
            ))}
          </div>
        </div>
      ) :  <div className={styles.chatList}>
      <div className={styles.header}>
        <h3>Messages</h3>
      </div>
      <div className={styles.body}>
        {Data.map((chat) => (
          <div
            key={chat.id}
            onClick={() => navigate(`/organisation/messages/${chat.id}`)}
          >
            <Chat data={chat} />
          </div>
        ))}
      </div>
    </div>}

      {windowWidth <= 1000 && selectedChatData && (
        <div className={styles.chatBoxSm}>
          <ChatBox chats={selectedChatData} />
        </div>
      )}

      {/* ChatBox */}
      {windowWidth > 1000 && (
        <div className={styles.chatBox}>
          {selectedChatData ? (
            <ChatBox chats={selectedChatData} />
          ) : (
            <div className={styles.emptyChatBox}>
              <div className={styles.illustration}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H8l-5 5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className={styles.emptyTitle}>No Conversation Selected</h3>
              <p className={styles.emptySubtitle}>
                Pick a chat to start messaging with your friends.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
