
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

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

  const activeChats = createReducer({}, {
    'CHATS_SET_ACTIVE_CHAT': (state, action) => {
      const { chat } = action;
      state[chat.id] = chat;
    },
    'CHATS_UPDATE_USER_STATE': (state, action) => {
      const { user, chatId } = action;
      const joinedUsers = state[chatId].joinedUsers;
      const index = joinedUsers.findIndex(ju => ju.uid === user.uid);

      if (index < 0) { return state; }
      if (joinedUsers[index].state === user.state) { return state; }

      joinedUsers[index].state = user.state;
    }
  })

  const messages = createReducer({}, {
    'CHATS_SET_MESSAGES': (state, action) => {
      const prevMessages = state[action.chatId] || [];
      state[action.chatId] = [...prevMessages, ...action.messages]
    }
  })

  const messagesSubs = (state = {}, action) => {
    switch(action.type) {
      case 'CHATS_REGISTER_MESSAGE_SUB':
        return {...state, [action.chatId]: action.sub}
      default:
        return state;
    }
  }


  return combineReducers({
    joined,
    available,
    activeChats,
    messages,
    messagesSubs
  })
}

export default createChatReducer();
