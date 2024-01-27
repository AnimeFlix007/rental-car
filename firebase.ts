import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR7B6BqQoWH6-5EOWu60oB_V0H9-N87ho",
  authDomain: "nidi-rentals.firebaseapp.com",
  projectId: "nidi-rentals",
  storageBucket: "nidi-rentals.appspot.com",
  messagingSenderId: "765666342377",
  appId: "1:765666342377:web:0afadf0623f79d81d70778"
};

export const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);

export const FirebaseGoogleProvider = new GoogleAuthProvider()