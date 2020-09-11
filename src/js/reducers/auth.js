

const DEFAULT_STATE = {
  user: null,
  isChecking: false
}


export default function authReducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case 'AUTH_REGISTER_INIT':
    case 'AUTH_LOGIN_INIT':
      return { ...state, isChecking: true };
    case 'AUTH_REGISTER_SUCCESS':
    case 'AUTH_LOGIN_SUCCESS':
      return { ...state, isChecking: false };
    case 'AUTH_ON_INIT':
      return { user: null, isChecking: true}
    case 'AUTH_ON_SUCCESS':
      return { user: action.user, isChecking: false}
    case 'AUTH_ON_ERROR':
      return { user: null, isChecking: false}
    default:
      return state;
  }
}
