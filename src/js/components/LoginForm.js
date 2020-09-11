
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/auth';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginUser(data));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="centered-container-form">
      <div className="header">Welcome here!</div>
      <div className="subheader">Login and chat with other people!</div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            ref={register}
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
            ref={register}
            type="password"
            name="password"
            className="form-control"
            id="password" />
        </div>
        { false && <div className="alert alert-danger small">Some error</div>}
        <button
          type="submit"
          className="btn btn-outline-primary">Login</button>
      </div>
    </form>
  )
}
