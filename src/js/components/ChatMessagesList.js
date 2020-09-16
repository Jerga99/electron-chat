

import React from 'react';

export default function ChatMessagesList({messages = []}) {
  return (
    <div className="chat-container">
      <ul className="chat-box chatContainerScroll">
        { messages.map(message =>
          <li
            key={message.id}
            className="chat-left">
            <div className="chat-avatar">
              <img
                src={message?.author.avatar}
                alt="Retail Admin" />
              <div className="chat-name">{message?.author.username}</div>
            </div>
            <div className="chat-text-wrapper">
              <span className="chat-text">{message.content}</span>
              <span className="chat-spacer"></span>
              <div className="chat-hour">{message.timestamp}</div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
