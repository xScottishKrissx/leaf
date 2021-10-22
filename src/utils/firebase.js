import * as firebase from 'firebase/app';
import "firebase/firestore";


const config = {
    apiKey: "AIzaSyC7KIzozOl9GrH6AP7xHn8UnXNK1gsUg7Q",
    authDomain: "leaf-e177d.firebaseapp.com",
    databaseURL: "https://leaf-e177d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "leaf-e177d",
    storageBucket: "leaf-e177d.appspot.com",
    messagingSenderId: "991953710236",
    appId: "1:991953710236:web:80ca754ad461921adc9159",
    measurementId: "G-X3HDTXWHES"
  };


firebase.initializeApp(config)


const firestore = firebase.firestore()

export {firestore}