import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDwtRMEPXL0DG6jCB3v2OS60mifTdybUfk",
    authDomain: "todo-app-ak-dbbac.firebaseapp.com",
    projectId: "todo-app-ak-dbbac",
    storageBucket: "todo-app-ak-dbbac.appspot.com",
    messagingSenderId: "668953179181",
    appId: "1:668953179181:web:18a0f7e776cc7cbe71f4a4",
    measurementId: "G-LXKF77NXX5"
})
const db= firebaseApp.firestore();

export default db;