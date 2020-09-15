
import * as api from '../api/connection';

export const checkUserConnection = () => dispatch =>
  api.onConnectionChanged((isConnected) => {
    console.log(isConnected);
    dispatch({type: 'CONNECTION_USER_STATUS_CHANGED'})
  })
