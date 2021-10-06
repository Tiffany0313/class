//v8.7.1
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "class-deb04.firebaseapp.com",
    projectId: "class-deb04",
    storageBucket: "class-deb04.appspot.com",
    messagingSenderId: "997092671112",
    appId: "1:997092671112:web:3ee0f8db240708f660293d",
    measurementId: "G-S9NYJGGLJ6"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export { db };

// v8.10.0
// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: "class-deb04.firebaseapp.com",
//   projectId: "class-deb04",
//   storageBucket: "class-deb04.appspot.com",
//   messagingSenderId: "997092671112",
//   appId: "1:997092671112:web:3ee0f8db240708f660293d",
//   measurementId: "G-S9NYJGGLJ6"
// });

// const db = firebaseApp.firestore();

// export { db };
