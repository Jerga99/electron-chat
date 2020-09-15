

import firebase from 'firebase/app';
import 'firebase/database';
import db from '../db/firestore';

const getOnlineStatus = isOnline => ({
  state: isOnline ? 'online' : 'offline',
  lastChanged: firebase.firestore.FieldValue.serverTimestamp()
})

export const setUserOnlineStatus = (uid, isOnline) => {
  const userRef = db.doc(`/profiles/${uid}`);
  const updateData = getOnlineStatus(isOnline);
  return userRef.update(updateData)
}

export const onConnectionChanged = onConnection =>
  firebase
    .database()
    .ref('.info/connected')
    .on('value', snapshot => {
      const isConnected = snapshot?.val() ? snapshot.val() : false;
      onConnection(isConnected)
    })
