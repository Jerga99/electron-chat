
import * as api from '../api/chats';
import db from '../db/firestore';

export const fetchChats = () => dispatch =>
  api
    .fetchChats()
    .then(chats => dispatch({
      type: 'CHATS_FETCH_SUCCESS',
      chats
    }))


export const createChat = (formData, userId) => async dispatch => {
  const newChat = {...formData};
  newChat.admin = db.doc(`profiles/${userId}`);

  const chatId = await api.createChat(newChat);
  dispatch({type: 'CHATS_CREATE_SUCCESS'});
  await api.joinChat(userId, chatId)
  dispatch({type: 'CHATS_JOIN_SUCCESS'});
  return chatId;
}

// https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg
