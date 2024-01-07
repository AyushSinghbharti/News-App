// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/firestore";
import "firebase/auth"; // Import the "auth" module
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWSjeVWisaGlUV0PAEPdxDd3UxV72gyos",
  authDomain: "fir-auth-7b570.firebaseapp.com",
  projectId: "fir-auth-7b570",
  storageBucket: "fir-auth-7b570.appspot.com",
  messagingSenderId: "763992251618",
  appId: "1:763992251618:web:224de32c492fc7c75752bb"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };