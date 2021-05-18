import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBFL-6cOc7j3yRg7oFVY2Eos1Kyf4FbAEU",
    authDomain: "j-project--manager.firebaseapp.com",
    projectId: "j-project--manager",
    storageBucket: "j-project--manager.appspot.com",
    messagingSenderId: "9824451223",
    appId: "1:9824451223:web:df3024a8b7a00dba5d07d2"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      firebase,
      googleAuthProvider
  }