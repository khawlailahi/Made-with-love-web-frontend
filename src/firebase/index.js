import firebase from 'firebase/app';
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAMPwlFUFiT3E0E3L1ChhJJRcpJec9o_ac",
    authDomain: "made-with-love-ae166.firebaseapp.com",
    projectId: "made-with-love-ae166",
    storageBucket: "made-with-love-ae166.appspot.com",
    messagingSenderId: "810386719078",
    appId: "1:810386719078:web:29712908412bc0aca508a7",
    measurementId: "G-0MFB5T75NK"
  };


firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

export { storage, firebase as default }