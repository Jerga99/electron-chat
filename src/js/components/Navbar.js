
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const history = useHistory();
  const message = useSelector(state => state.message)

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            onClick={() => history.goBack()}
            className="btn btn-outline-primary">Back
          </button>
          <Link
            to="/settings"
            className="btn btn-outline-success ml-2">Settings
          </Link>
          {message}
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <button
            onClick={() => history.push('/register')}
            className="btn btn-outline-danger ml-2">Register</button>
          <Link
            to="/login"
            className="btn btn-outline-success ml-2">Login</Link>
        </div>
      </nav>
    </div>
  )
}
