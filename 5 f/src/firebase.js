// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK33432ifth8verQDcxOl4wp_Hmb2wW2s",
  authDomain: "aditya-30a8f.firebaseapp.com",
  projectId: "aditya-30a8f",
  storageBucket: "aditya-30a8f.appspot.com",
  messagingSenderId: "880102335692",
  appId: "1:880102335692:web:0edaa74ab00b1b2a418e69",
  measurementId: "G-9EY7BQ7WCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);