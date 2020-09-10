
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBOUUMqQGaiWQm_z9CcrcpLccHtk4D1ZDo",
  authDomain: "electron-chat-3441b.firebaseapp.com",
  databaseURL: "https://electron-chat-3441b.firebaseio.com",
  projectId: "electron-chat-3441b",
  storageBucket: "electron-chat-3441b.appspot.com",
  messagingSenderId: "118815846529",
  appId: "1:118815846529:web:7073ae8e061926c6bfdd80",
  measurementId: "G-YSJT4E301N"
};

export default firebase.initializeApp(config).firestore();

