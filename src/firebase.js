import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA88fP1_NqZDdid1u51-g5vGVfq8ERId08",
    authDomain: "to-do-list-d9ce9.firebaseapp.com",
    projectId: "to-do-list-d9ce9",
    storageBucket: "to-do-list-d9ce9.appspot.com",
    messagingSenderId: "762529820749",
    appId: "1:762529820749:web:c3498aba66d58612ef2c04",
    measurementId: "G-06CJ95V35W"
  });

export { firebaseConfig as firebase };