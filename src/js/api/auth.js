

import firebase from 'firebase/app';
import 'firebase/auth';

export async function register({email, password}) {
  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return user;
  } catch(error) {
    return Promise.reject(error.message);
  }
}
