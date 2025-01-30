import { useState, useRef, useEffect } from "react"
import { Send, Search, ArrowLeft } from "lucide-react"
import InputEmoji from "react-input-emoji"
import { Avatar } from "antd"

// Mock data for chats and messages
const initialChats = [
  {
    id: 1,
    name: "Alice",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey there!",
    time: "10:00 AM",
    unreadCount: 3,
    messages: [
      { id: 1, sender: "Alice", content: "Hey there!", timestamp: "10:00 AM" },
      { id: 2, sender: "You", content: "Hi Alice! How are you?", timestamp: "10:05 AM" },
      { id: 3, sender: "Alice", content: "I'm doing great, thanks for asking! 😊", timestamp: "10:10 AM" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "How are you?",
    time: "9:45 AM",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "Bob", content: "How are you?", timestamp: "9:45 AM" },
      { id: 2, sender: "You", content: "I'm good, thanks! How about you?", timestamp: "9:50 AM" },
      { id: 3, sender: "Bob", content: "Not bad, just working on some projects.", timestamp: "9:55 AM" },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "See you later!",
    time: "Yesterday",
    unreadCount: 2,
    messages: [
      { id: 1, sender: "Charlie", content: "Are we still on for tonight?", timestamp: "Yesterday" },
      { id: 2, sender: "You", content: "Yes, definitely!", timestamp: "Yesterday" },
      { id: 3, sender: "Charlie", content: "Great! See you later!", timestamp: "Yesterday" },
    ],
  },
  {
    id: 4,
    name: "David",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks!",
    time: "Yesterday",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "You", content: "Hey David, can you send me that report?", timestamp: "Yesterday" },
      { id: 2, sender: "David", content: "Sure, I'll email it to you right away.", timestamp: "Yesterday" },
      { id: 3, sender: "You", content: "Got it, thanks!", timestamp: "Yesterday" },
      { id: 4, sender: "David", content: "Thanks!", timestamp: "Yesterday" },
    ],
  },
  {
    id: 1,
    name: "Alice",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey there!",
    time: "10:00 AM",
    unreadCount: 3,
    messages: [
      { id: 1, sender: "Alice", content: "Hey there!", timestamp: "10:00 AM" },
      { id: 2, sender: "You", content: "Hi Alice! How are you?", timestamp: "10:05 AM" },
      { id: 3, sender: "Alice", content: "I'm doing great, thanks for asking! 😊", timestamp: "10:10 AM" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "How are you?",
    time: "9:45 AM",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "Bob", content: "How are you?", timestamp: "9:45 AM" },
      { id: 2, sender: "You", content: "I'm good, thanks! How about you?", timestamp: "9:50 AM" },
      { id: 3, sender: "Bob", content: "Not bad, just working on some projects.", timestamp: "9:55 AM" },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "See you later!",
    time: "Yesterday",
    unreadCount: 2,
    messages: [
      { id: 1, sender: "Charlie", content: "Are we still on for tonight?", timestamp: "Yesterday" },
      { id: 2, sender: "You", content: "Yes, definitely!", timestamp: "Yesterday" },
      { id: 3, sender: "Charlie", content: "Great! See you later!", timestamp: "Yesterday" },
    ],
  },
  {
    id: 4,
    name: "David",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks!",
    time: "Yesterday",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "You", content: "Hey David, can you send me that report?", timestamp: "Yesterday" },
      { id: 2, sender: "David", content: "Sure, I'll email it to you right away.", timestamp: "Yesterday" },
      { id: 3, sender: "You", content: "Got it, thanks!", timestamp: "Yesterday" },
      { id: 4, sender: "David", content: "Thanks!", timestamp: "Yesterday" },
    ],
  },
  {
    id: 1,
    name: "Alice",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey there!",
    time: "10:00 AM",
    unreadCount: 3,
    messages: [
      { id: 1, sender: "Alice", content: "Hey there!", timestamp: "10:00 AM" },
      { id: 2, sender: "You", content: "Hi Alice! How are you?", timestamp: "10:05 AM" },
      { id: 3, sender: "Alice", content: "I'm doing great, thanks for asking! 😊", timestamp: "10:10 AM" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "How are you?",
    time: "9:45 AM",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "Bob", content: "How are you?", timestamp: "9:45 AM" },
      { id: 2, sender: "You", content: "I'm good, thanks! How about you?", timestamp: "9:50 AM" },
      { id: 3, sender: "Bob", content: "Not bad, just working on some projects.", timestamp: "9:55 AM" },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "See you later!",
    time: "Yesterday",
    unreadCount: 2,
    messages: [
      { id: 1, sender: "Charlie", content: "Are we still on for tonight?", timestamp: "Yesterday" },
      { id: 2, sender: "You", content: "Yes, definitely!", timestamp: "Yesterday" },
      { id: 3, sender: "Charlie", content: "Great! See you later!", timestamp: "Yesterday" },
    ],
  },
  {
    id: 4,
    name: "David",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks!",
    time: "Yesterday",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "You", content: "Hey David, can you send me that report?", timestamp: "Yesterday" },
      { id: 2, sender: "David", content: "Sure, I'll email it to you right away.", timestamp: "Yesterday" },
      { id: 3, sender: "You", content: "Got it, thanks!", timestamp: "Yesterday" },
      { id: 4, sender: "David", content: "Thanks!", timestamp: "Yesterday" },
    ],
  },
  {
    id: 1,
    name: "Alice",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey there!",
    time: "10:00 AM",
    unreadCount: 3,
    messages: [
      { id: 1, sender: "Alice", content: "Hey there!", timestamp: "10:00 AM" },
      { id: 2, sender: "You", content: "Hi Alice! How are you?", timestamp: "10:05 AM" },
      { id: 3, sender: "Alice", content: "I'm doing great, thanks for asking! 😊", timestamp: "10:10 AM" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "How are you?",
    time: "9:45 AM",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "Bob", content: "How are you?", timestamp: "9:45 AM" },
      { id: 2, sender: "You", content: "I'm good, thanks! How about you?", timestamp: "9:50 AM" },
      { id: 3, sender: "Bob", content: "Not bad, just working on some projects.", timestamp: "9:55 AM" },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "See you later!",
    time: "Yesterday",
    unreadCount: 2,
    messages: [
      { id: 1, sender: "Charlie", content: "Are we still on for tonight?", timestamp: "Yesterday" },
      { id: 2, sender: "You", content: "Yes, definitely!", timestamp: "Yesterday" },
      { id: 3, sender: "Charlie", content: "Great! See you later!", timestamp: "Yesterday" },
    ],
  },
  {
    id: 4,
    name: "David",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks!",
    time: "Yesterday",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "You", content: "Hey David, can you send me that report?", timestamp: "Yesterday" },
      { id: 2, sender: "David", content: "Sure, I'll email it to you right away.", timestamp: "Yesterday" },
      { id: 3, sender: "You", content: "Got it, thanks!", timestamp: "Yesterday" },
      { id: 4, sender: "David", content: "Thanks!", timestamp: "Yesterday" },
    ],
  },
  {
    id: 1,
    name: "Alice",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey there!",
    time: "10:00 AM",
    unreadCount: 3,
    messages: [
      { id: 1, sender: "Alice", content: "Hey there!", timestamp: "10:00 AM" },
      { id: 2, sender: "You", content: "Hi Alice! How are you?", timestamp: "10:05 AM" },
      { id: 3, sender: "Alice", content: "I'm doing great, thanks for asking! 😊", timestamp: "10:10 AM" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "How are you?",
    time: "9:45 AM",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "Bob", content: "How are you?", timestamp: "9:45 AM" },
      { id: 2, sender: "You", content: "I'm good, thanks! How about you?", timestamp: "9:50 AM" },
      { id: 3, sender: "Bob", content: "Not bad, just working on some projects.", timestamp: "9:55 AM" },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "See you later!",
    time: "Yesterday",
    unreadCount: 2,
    messages: [
      { id: 1, sender: "Charlie", content: "Are we still on for tonight?", timestamp: "Yesterday" },
      { id: 2, sender: "You", content: "Yes, definitely!", timestamp: "Yesterday" },
      { id: 3, sender: "Charlie", content: "Great! See you later!", timestamp: "Yesterday" },
    ],
  },
  {
    id: 4,
    name: "David",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks!",
    time: "Yesterday",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "You", content: "Hey David, can you send me that report?", timestamp: "Yesterday" },
      { id: 2, sender: "David", content: "Sure, I'll email it to you right away.", timestamp: "Yesterday" },
      { id: 3, sender: "You", content: "Got it, thanks!", timestamp: "Yesterday" },
      { id: 4, sender: "David", content: "Thanks!", timestamp: "Yesterday" },
    ],
  },
]

const WhatsAppUI = () => {
  const [chats, setChats] = useState(initialChats)
  const [selectedChat, setSelectedChat] = useState(null)
  const [currentMessage, setCurrentMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (selectedChat) {
      scrollToBottom()
    }
  }, [selectedChat, chats, scrollToBottom]) // Added scrollToBottom to dependencies

  const handleSendMessage = () => {
    if (currentMessage.trim() && selectedChat) {
      const newMessage = {
        id: selectedChat.messages.length + 1,
        sender: "You",
        content: currentMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      const updatedChats = chats.map((chat) =>
        chat.id === selectedChat.id
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              lastMessage: currentMessage,
              time: newMessage.timestamp,
            }
          : chat,
      )
      setChats(updatedChats)
      setSelectedChat({ ...selectedChat, messages: [...selectedChat.messages, newMessage] })
      setCurrentMessage("")
    }
  }

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="flex h-[100vh] bg-gray-900">
      {/* Sidebar */}
      <div
        className={`w-full md:w-2/5 lg:w-1/4 bg-gray-800 border-r border-gray-700 flex flex-col ${
          selectedChat ? "hidden md:flex" : "flex"
        }`}
      >
        

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full p-2 pl-10 rounded-full bg-gray-700 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer border-b border-gray-700"
              onClick={() => setSelectedChat(chat)}
            >
              <Avatar className="mr-4 h-10 w-10">A</Avatar> 
              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-white">{chat.name}</h3>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unreadCount > 0 && (
                <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1 ml-2">{chat.unreadCount}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className={`flex-1 flex flex-col ${selectedChat ? "flex" : "hidden md:flex"}`}>
        {selectedChat ? (
          <>
            {/* Chat header */}
            <div className="p-4 bg-gray-800 flex items-center border-l border-gray-700">
              <button className="md:hidden mr-2 text-gray-300" onClick={() => setSelectedChat(null)}>
                <ArrowLeft size={24} />
              </button>
              <Avatar className="mr-4 h-10 w-10">A</Avatar> 
              <h2 className="font-semibold text-white">{selectedChat.name}</h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-900">
              {selectedChat.messages.map((message) => (
                <div key={message.id} className={`mb-4 ${message.sender === "You" ? "text-right" : "text-left"}`}>
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === "You" ? "bg-green-700 text-white" : "bg-gray-700 text-white"
                    }`}
                  >
                    <p>{message.content}</p>
                    <span className="text-xs text-gray-400">{message.timestamp}</span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message input */}
            <div className="bg-gray-800 p-4 flex items-center">
              <InputEmoji
                value={currentMessage}
                onChange={setCurrentMessage}
                cleanOnEnter
                onEnter={handleSendMessage}
                placeholder="Type a message"
                theme="dark"
                borderColor="transparent"
                buttonElement={
                  <button className="ml-2 text-gray-300 hover:text-gray-100">
                    <Send size={24} />
                  </button>
                }
              />
            </div>
          </>
        ) : (
          <div className="flex-1 hidden md:flex items-center justify-center bg-gray-800 text-gray-300">
            <p className="text-xl">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default WhatsAppUI

