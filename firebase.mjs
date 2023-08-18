// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2EgeScovr8gEXah9ES7Yxij5MySYLWzg",
  authDomain: "email-login-544c6.firebaseapp.com",
  projectId: "email-login-544c6",
  storageBucket: "email-login-544c6.appspot.com",
  messagingSenderId: "120073716628",
  appId: "1:120073716628:web:acefb9b63f07584ad7c581",
  measurementId: "G-SVP6CFCJYB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);


