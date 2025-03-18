import { createContext, useContext, useState } from "react";

const ChatContext = createContext(); // ✅ Ensure this is properly defined

export const ChatProvider = ({ children }) => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <ChatContext.Provider value={{ selectedChatId, setSelectedChatId }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}; // ✅ Defensive check added
