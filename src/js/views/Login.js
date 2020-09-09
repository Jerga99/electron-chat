
import React from 'react';

export default function Login() {
  return (
    <div className="centered-view">
      <div className="centered-container">
        <form onSubmit={() => {}} className="centered-container-form">
          <div className="header">Welcome here!</div>
          <div className="subheader">Login and chat with other people!</div>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password" />
            </div>
            { false && <div className="alert alert-danger small">Some error</div>}
            <button type="submit" className="btn btn-outline-primary">Login</button>
          </div>
        </form>
        <small className="form-text text-muted mt-2">Already registered?
          <span
            onClick={() => {}}
            className="btn-link ml-2">Login</span></small>
      </div>
    </div>
  )
}
