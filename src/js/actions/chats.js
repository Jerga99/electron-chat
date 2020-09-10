
import * as api from '../api/chats';

export const fetchChats = () => dispatch =>
  api
    .fetchChats()
    .then(chats => dispatch({
      type: 'CHATS_FETCH_SUCCESS',
      chats
    }))

