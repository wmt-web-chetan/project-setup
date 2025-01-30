import React, { useState } from "react"

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/100?img=1",
    lastMessage: "Hey, how are you?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "https://i.pravatar.cc/100?img=2",
    lastMessage: "Can we meet tomorrow?",
    timestamp: "Yesterday",
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatar: "https://i.pravatar.cc/100?img=3",
    lastMessage: "Thanks for your help!",
    timestamp: "Tuesday",
  },
  {
    id: 4,
    name: "David Miller",
    avatar: "https://i.pravatar.cc/100?img=4",
    lastMessage: "See you soon!",
    timestamp: "Monday",
  },
  {
    id: 5,
    name: "Eve Wilson",
    avatar: "https://i.pravatar.cc/100?img=5",
    lastMessage: "Great idea!",
    timestamp: "Sunday",
  },
]

const UserList = ({ onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="flex flex-col h-full bg-[#111b21]">
      <div className="p-4 bg-[#202c33]">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full p-2 bg-[#2a3942] text-white rounded-lg focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center p-3 border-b border-gray-700 hover:bg-[#2a3942] cursor-pointer"
            onClick={() => onSelectUser(user)}
          >
            <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-12 h-12 rounded-full mr-3" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="text-white font-semibold">{user.name}</span>
                <span className="text-gray-400 text-sm">{user.timestamp}</span>
              </div>
              <p className="text-gray-400 text-sm truncate">{user.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList

