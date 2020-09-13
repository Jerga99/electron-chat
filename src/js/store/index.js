

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import chatReducer from '../reducers/chats';
import authReducer from '../reducers/auth';
import appReducer from '../reducers/app';

import appMiddleware from './middlewares/app';

export default function configureStore() {
  const middlewares = [
    thunkMiddleware,
    appMiddleware
  ];

  const store = createStore(
    combineReducers({
      chats: chatReducer,
      auth: authReducer,
      app: appReducer
    }),
    applyMiddleware(...middlewares));

  return store;
}
