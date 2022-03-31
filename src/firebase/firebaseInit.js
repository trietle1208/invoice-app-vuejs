// import firebase from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // import "firebase/firestore";
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD7f3Qv4Ap1q7vuyHPMM4TIOiOdvdIk3Qo",
    authDomain: "invoice-app-in-vuejs.firebaseapp.com",
    projectId: "invoice-app-in-vuejs",
    storageBucket: "invoice-app-in-vuejs.appspot.com",
    messagingSenderId: "1033363493920",
    appId: "1:1033363493920:web:71a9da8230b1ec3ee4d845"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const firebaseApp = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
  export default firebaseApp.firestore();