
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js"

 
  const firebaseConfig = {
    apiKey: "AIzaSyAYFOVk2R0OT2Yr1Jh4iyvFNxcXJuKbugA",
    authDomain: "authentication-96633.firebaseapp.com",
    projectId: "authentication-96633",
    storageBucket: "authentication-96633.appspot.com",
    messagingSenderId: "656896628812",
    appId: "1:656896628812:web:07b1869d6f89aa463c7ce9",
    measurementId: "G-8LH3Q6WKQX"
  };

  
  export const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
export const db = getFirestore(app);
