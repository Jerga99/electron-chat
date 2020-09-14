
import * as api from '../api/chats';
import db from '../db/firestore';

export const fetchChats = () => async (dispatch, getState) => {
  const { user } = getState().auth;
  dispatch({type: 'CHATS_FETCH_INIT'});
  const chats = await api.fetchChats();

  chats
    .forEach(chat => chat.joinedUsers = chat.joinedUsers.map(user => user.id));
  const sortedChats = chats.reduce((accuChats, chat) => {
    accuChats[chat.joinedUsers.includes(user.uid) ? 'joined' : 'available'].push(chat);
    return accuChats;
  }, {joined: [], available: []})

  dispatch({
    type: 'CHATS_FETCH_SUCCESS',
    ...sortedChats
  })

  return sortedChats;
}

export const joinChat = (chat, uid) => dispatch =>
  api.joinChat(uid, chat.id)
    .then(_ => {
      dispatch({type: 'CHATS_JOIN_SUCCESS', chat});
    })

export const createChat = (formData, userId) => async dispatch => {
  const newChat = {...formData};
  newChat.admin = db.doc(`profiles/${userId}`);

  const chatId = await api.createChat(newChat);
  dispatch({type: 'CHATS_CREATE_SUCCESS'});
  await api.joinChat(userId, chatId)
  dispatch({type: 'CHATS_JOIN_SUCCESS', chat: {...newChat, id: chatId}});
  return chatId;
}

export const subscribeToChat = chatId => dispatch =>
  api
    .subscribeToChat(chatId, async (chat) => {

      const joinedUsers = await Promise.all(chat.joinedUsers.map(async userRef => {
        const userSnapshot = await userRef.get();
        return userSnapshot.data();
      }))

      chat.joinedUsers = joinedUsers;
      dispatch({type: 'CHATS_SET_ACTIVE_CHAT', chat})
    })

export const subscribeToProfile = uid => dispatch =>
  api
    .subscribeToProfile(uid, user => {
      console.log('changing profile!');
      dispatch({type: 'CHATS_UPDATE_USER_STATE', user})
    })

// https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg
