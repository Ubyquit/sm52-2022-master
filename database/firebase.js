import firebase from 'firebase/compat'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEUEKjaogq2Ky_bg7vh7pOP-AyeTicI0Q",
    authDomain: "sm52-de3ad.firebaseapp.com",
    projectId: "sm52-de3ad",
    storageBucket: "sm52-de3ad.appspot.com",
    messagingSenderId: "502536894679",
    appId: "1:502536894679:web:5554cb8e61ae9d51a05892",
    measurementId: "G-N2KW65Y3KL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {firebase, db}