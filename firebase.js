import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcygN15eRdNNNI9F3R6Mh4GXolN8IErKU",
  authDomain: "slack-clone-f36a2.firebaseapp.com",
  projectId: "slack-clone-f36a2",
  storageBucket: "slack-clone-f36a2.appspot.com",
  messagingSenderId: "1026205149270",
  appId: "1:1026205149270:web:1ab1953912dd07dda0f3f7",
  measurementId: "G-J0TK3N172G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);;
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;