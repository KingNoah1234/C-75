import firebase from "firebase";
require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyCsrRAiidljReFEQe31HakaGz-XAu-0f7I",
    authDomain: "c-71-homework.firebaseapp.com",
    projectId: "c-71-homework",
    storageBucket: "c-71-homework.appspot.com",
    messagingSenderId: "98327312483",
    appId: "1:98327312483:web:bc349747e83ddff7a46056"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
