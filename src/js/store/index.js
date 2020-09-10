

import { createStore } from 'redux';

export default function configureStore() {

  const store = createStore(() => {
    return {
      message: 'Hello World',
      data1: 'just some testing data',
      data2: 'just some testing data 2',
    }
  });

  return store;
}
