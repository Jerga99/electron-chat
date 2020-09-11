

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import chatReducer from '../reducers/chats';
import authReducer from '../reducers/auth';

export default function configureStore() {
  const middlewares = [
    thunkMiddleware
  ];

  const store = createStore(
    combineReducers({
      chats: chatReducer,
      auth: authReducer
    }),
    applyMiddleware(...middlewares));

  return store;
}
