
import db from '../db/firestore';

const extractSnapshotData = snapshot =>
  snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))

export const fetchChats = () =>
  db
    .collection('chats')
    .get()
    .then(extractSnapshotData)

export const createChat = chat =>
  db
    .collection('chats')
    .add(chat)
    .then(docRef => docRef.id)
