
import { combineReducers } from 'redux';

function createChatReducer() {
  const joined = (state = [], action) => {
    switch(action.type) {
      case 'CHATS_FETCH_RESTART':
        return [];
      case 'CHATS_FETCH_SUCCESS':
        return action.joined;
      default: {
        return state;
      }
    }
  }

  const available = (state = [], action) => {
    switch(action.type) {
      case 'CHATS_FETCH_RESTART':
        return [];
      case 'CHATS_FETCH_SUCCESS':
        return action.available;
      default: {
        return state;
      }
    }
  }

  return combineReducers({
    joined,
    available
  })
}

export default createChatReducer();
