





export const createErrorReducer = actionType =>
  (state = null, action) => {
    switch(action.type) {
      case `${actionType}_INIT`:
        return null;
      case `${actionType}_ERROR`:
        return action.error;
      default:
        return state;
    }
  }

