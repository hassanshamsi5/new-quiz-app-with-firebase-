// import { auth, db } from './firebase.mjs';
// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// var btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const firstname = document.getElementById('name').value;
//   const phoneNumber = document.getElementById('num').value;
//   const fname = document.getElementById('fname').value;

//   console.log(email, password, firstname, phoneNumber, fname);

//   createUserWithEmailAndPassword(auth, email, password)
//     .then(async (userCredential) => {

//       try {
//         const docRef = await addDoc(collection(db, "users"), {
//           first: firstname,
//           fathername: fname,
//           phoneNumber: phoneNumber,
//           password: password,
//           email: email,
//           createdOn: Date.now()
//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }

//       const user = userCredential.user;
//       console.log('user', user);
//       alert('User account is created');
//       location.replace('./login.html');
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// });

// let passwordInput = document.getElementById("password");
// let submitButton = document.querySelector(".btn1");

// passwordInput.addEventListener("input", function () {
//   let password = passwordInput.value;
//   let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//   if (pattern.test(password)) {
//     submitButton.style.display = "block";
//   } else {
//     submitButton.style.display = "none";
//   }
// });

import { auth, db } from './firebase.mjs';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Password validation logic
let passwordInput = document.getElementById("password");
let submitButton = document.getElementById("btn");

passwordInput.addEventListener("input", function () {
  let password = passwordInput.value;
  let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (pattern.test(password)) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
});

// Firebase authentication logic
submitButton.addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const firstname = document.getElementById('name').value;
  const phoneNumber = document.getElementById('num').value;
  const fname = document.getElementById('fname').value;

  console.log(email, password, firstname, phoneNumber, fname);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user data in Firestore
    const docRef = await addDoc(collection(db, "users"), {
      first: firstname,
      fathername: fname,
      phoneNumber: phoneNumber,
      password: password, // Note: This is not secure, consider hashing the password
      email: email,
      createdOn: Date.now()
    });

    console.log("Document written with ID: ", docRef.id);
    alert('User account is created');
    location.replace('./login.html');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error: ", errorCode, errorMessage);
    // Handle the error
  }
});
