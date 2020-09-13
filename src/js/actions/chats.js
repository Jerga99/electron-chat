
import * as api from '../api/chats';
import db from '../db/firestore';

export const fetchChats = () => dispatch =>
  api
    .fetchChats()
    .then(chats => dispatch({
      type: 'CHATS_FETCH_SUCCESS',
      chats
    }))


export const createChat = (formData, userId) => dispatch => {
  debugger
  const newChat = {...formData};
  const useRef = db.doc(`profiles/${userId}`);
  newChat.admin = useRef;
  newChat.joinedUsers = [useRef];

  return api
    .createChat(newChat)
    .then(_ => dispatch({type: 'CHATS_CREATE_SUCCESS'}))
}
