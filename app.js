
import { auth } from './firebase.mjs'
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


 onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      window.location.href = './index.html'
    }else{
      console.log("signout");
    }
  });


