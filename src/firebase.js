import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3md-C0n-Fgk9cVDykt69_66hJWzPOLMQ",
  authDomain: "datedeck-f7189.firebaseapp.com",
  projectId: "datedeck-f7189",
  storageBucket: "datedeck-f7189.appspot.com",
  messagingSenderId: "708260373960",
  appId: "1:708260373960:web:c407c5e30c1654ec934cfd",
  measurementId: "G-JKG6Q42WMV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
