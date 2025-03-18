import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChatProvider } from './Context/Chat.context'

createRoot(document.getElementById('root')).render(
  <ChatProvider>
    <App />
  </ChatProvider>
)
