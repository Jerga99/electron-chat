

import React from 'react';


export default function ChatUserList({users = []}) {

  return(
    <div className="list-container">
      <div className="chat-search-box">
        <div className="input-group">
          <input className="form-control" placeholder="Search" />
        </div>
      </div>
      <ul className="items">
        { users.map(user => (
           <li
            key={user.uid}
            className="item">
            <div className="item-status">
              <img
                src={user.avatar}
                alt="Retail Admin" />
              <span className="status online"></span>
            </div>
            <p className="name-time">
            <span className="name mr-2">{user.username}</span>
            </p>
          </li>
        ))
        }
      </ul>
    </div>
  )
}
