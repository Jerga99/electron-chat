
import Storage from '../utils/storage';

const INITIAL_STATE = {
  isDarkTheme: false,
  playSound: true,
  showNotifications: true,
  savable: true
}

export default function settingsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SETTINGS_UPDATE':
      return {...state, [action.setting]: action.value}
    case 'SETTINGS_INITIAL_LOAD':
      const storedSettings = Storage.getItem('app-settings');
      return {...state, ...storedSettings}
    default:
      return state;
  }
}
