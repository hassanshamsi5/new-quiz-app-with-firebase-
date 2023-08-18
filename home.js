import {auth} from './firebase.mjs'
import {signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

var btn = document.getElementById('btn');

btn.addEventListener('click' , () => {

    signOut(auth).then((res) => {
        alert('signout done');
        window.location.href = './home.html'
      }).catch((error) => {
        console.log(error)
      });
})

onAuthStateChanged(auth, (user) => {
    if (!user) {
      console.log(user)
      window.location.href = './index.html'
    }
  });
  