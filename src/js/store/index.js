

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {

  const middlewares = [
    thunkMiddleware
  ];

  const store = createStore(() => {
    return {
      message: 'Hello World',
      data1: 'just some testing data',
      data2: 'just some testing data 2',
    }
  }, applyMiddleware(...middlewares));

  return store;
}
