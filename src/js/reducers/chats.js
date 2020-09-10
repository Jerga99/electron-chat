
const DEFAULT_STATE = {
  items: []
}


export default function chatReducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case 'CHATS_FETCH_SUCCESS':
      return { items: action.chats }
    default: {
      return state;
    }
  }
}
