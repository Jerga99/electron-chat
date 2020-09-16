




export const updateSettings = (setting, value) => {
  alert(JSON.stringify({
    type: 'SETTINGS_UPDATE',
    setting,
    value
  }))
  return {
    type: 'SETTINGS_UPDATE',
    setting,
    value
  }
}
