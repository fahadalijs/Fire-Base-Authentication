

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyChKrDmbEW66i0bYiV8u9KrY-mQv9qPDHw",
  authDomain: "fir-authentication-168a0.firebaseapp.com",
  projectId: "fir-authentication-168a0",
  storageBucket: "fir-authentication-168a0.appspot.com",
  messagingSenderId: "691955894055",
  appId: "1:691955894055:web:d87f404f82bdc9a6058b02",
  measurementId: "G-6SBV21F73F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
