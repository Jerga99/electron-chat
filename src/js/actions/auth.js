
import * as api from '../api/auth';


export const registerUser = formData => dispatch =>
  api.register(formData)
    .then(_ => dispatch({type: 'AUTH_REGISTER_SUCCESS'}))


export const listenToAuthChanges = () => dispatch => {
  dispatch({type: 'AUTH_ON_INIT'});
  api.onAuthStateChanges(authUser => {
    if (authUser) {
      dispatch({type: 'AUTH_ON_SUCCESS', user: authUser});
    } else {
      dispatch({type: 'AUTH_ON_ERROR'});
    }
  })
}
