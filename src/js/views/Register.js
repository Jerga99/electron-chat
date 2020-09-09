
import React from 'react';

export default function Register() {
  return (
    <div className="centered-view">
      <div className="centered-container">
        <form onSubmit={() => {}} className="centered-container-form">
        <div className="header">Create an account</div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="text"
              name="avatar"
              className="form-control"
              id="avatar"
              aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password" />
          </div>
          { false && <div className="alert alert-danger small">Some Error</div>}
          <button type="submit" className="btn btn-outline-primary">Register</button>
        </div>
      </form>
      <small className="form-text text-muted mt-2">Not registered yet?
        <span
          onClick={() => {}}
          className="btn-link ml-2">Register</span>
        </small>
      </div>
    </div>
  )
}
