

import firebase from 'firebase/app';
import 'firebase/database';


export const onConnectionChanged = onConnection =>
  firebase
    .database()
    .ref('.info/connected')
    .on('value', snapshot => onConnection(snapshot.val()))
