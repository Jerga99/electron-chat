
import { combineReducers } from 'redux';

function createChatReducer() {
  const joined = (state = [], action) => {
    switch(action.type) {
      case 'CHATS_FETCH_RESTART':
        return [];
      case 'CHATS_FETCH_SUCCESS':
        return action.joined;
      case 'CHATS_JOIN_SUCCESS':
        return [...state, action.chat]
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
      case 'CHATS_JOIN_SUCCESS':
        return state.filter(chat => chat.id !== action.chat.id)
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
