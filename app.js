import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./configue.js";




const from = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

from.addEventListener('submit' , (event) =>{
    event.preventDefault();  
    signInWithEmailAndPassword(auth, email.value , password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = 'home.html'
     })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  

})

