
import React from 'react';


export default function Navbar() {
  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <a href="/" className="btn btn-outline-success ml-2">Settings</a>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <button
            onClick={() => {}}
            className="btn btn-sm btn-outline-danger ml-2">Logout</button>
          <button
            onClick={() => {}}
            className="btn btn-sm btn-outline-success ml-2">Login</button>
        </div>
      </nav>
    </div>
  )
}
