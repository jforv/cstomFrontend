import firebase from 'firebase/app'
import { auth } from "firebase";
import 'firebase/firestore'
import { apiKey, projectId, authDomain } from '~/.env';

// let firebaseApp = null
if (!firebase.apps.length) {
  firebase.initializeApp({ apiKey, projectId, authDomain });
}
let db = firebase.firestore();

// const emailPassword = auth.signInWithEmailAndPassword(email, password);

const googleAuthProvider = new auth.GoogleAuthProvider();
const authentication = firebase.auth();
// Enabling this will force the user to select account.
// googleAuthProvider.setCustomParameters({
//   prompt: 'select_account'
// });
export { db, firebase, googleAuthProvider, authentication }
