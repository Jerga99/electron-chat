


import db from '../db/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';

const createUserProfile = userProfile =>
  db
    .collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile)

export const getUserProfile = uid =>
  db
    .collection('profiles')
    .doc(uid)
    .get()
    .then(snanpshot => snanpshot.data())

export async function register({email, password, username, avatar}) {
  const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  const userProfile = {uid: user.uid, username, email, avatar, joinedChats: []}
  await createUserProfile(userProfile)
  return userProfile;
}

export const login = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    debugger
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

export const logout = () => firebase.auth().signOut()

export const onAuthStateChanges = onAuth =>
  firebase.auth().onAuthStateChanged(onAuth)
