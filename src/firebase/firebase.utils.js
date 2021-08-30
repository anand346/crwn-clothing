import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
    apiKey: "AIzaSyBOlRMTnWAu1HfP6a8eVoCM--L08tuc1nQ",
    authDomain: "crwn-db-34553.firebaseapp.com",
    projectId: "crwn-db-34553",
    storageBucket: "crwn-db-34553.appspot.com",
    messagingSenderId: "560159226603",
    appId: "1:560159226603:web:3b2d2e102d1c8f23c09cae"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;