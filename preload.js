
const { ipcRenderer } = require('electron');


window.sendNotification = (message) => {
  console.log(window.notSecure);
  ipcRenderer.send('notify', message);
}
