
import * as api from '../api/auth';

export const registerUser = formData => dispatch => {
  dispatch({type: 'AUTH_REGISTER_INIT'});
  return api.register(formData)
    .then(user => dispatch({type: 'AUTH_REGISTER_SUCCESS', user}))
    .catch(error => dispatch({type: 'AUTH_REGISTER_ERROR', error}))
}

export const loginUser = formData => dispatch => {
  dispatch({type: 'AUTH_LOGIN_INIT'});
  return api
    .login(formData)
    .then(user => dispatch({type: 'AUTH_LOGIN_SUCCESS', user}))
    .catch(error => {
      dispatch({type: 'AUTH_LOGIN_ERROR', error})
    })
}

export const logout = () => dispatch =>
  api
    .logout()
    .then(_ => {
      dispatch({type: 'AUTH_LOGOUT_SUCCESS'});
      dispatch({type: 'CHATS_FETCH_RESTART'});
    })

export const listenToAuthChanges = () => dispatch => {
  dispatch({type: 'AUTH_ON_INIT'});
  return api.onAuthStateChanges(async authUser => {
    if (authUser) {
      const userProfile = await api.getUserProfile(authUser.uid);
      dispatch({type: 'AUTH_ON_SUCCESS', user: userProfile});
    } else {
      dispatch({type: 'AUTH_ON_ERROR'});
    }
  })
}
