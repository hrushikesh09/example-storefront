import * as firebase from 'firebase'
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD75i2YWo9ylatizQxt0pi4rSNCjIxV4_Q",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "https://yoman-c8e76.firebaseio.com/",
  projectId: "yoman-c8e76",
  storageBucket: "gs://yoman-c8e76.appspot.com/",
  messagingSenderId: "YOUR SENDER ID ",
  appId: "1:495102656636:web:49e7a86ad8f11cadcd49f9"
};
// Initialize Firebase
// var fireDB = firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default fireDB.database().ref();
