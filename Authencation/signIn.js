//  Import From Fire Base
import { auth , onAuthStateChanged, signInWithEmailAndPassword } from './fireBase.js';

// Elements from HTML
const userSignEmail = document.getElementById("userEmail");
const userSignPassword = document.getElementById("userSignInPassword");
const signUpBtn = document.getElementById("logInBtn");

// Event listener for Sign up button
signUpBtn.addEventListener("click", signIn);

// Sign In Function 
function signIn (){
  signInWithEmailAndPassword(auth, userEmail.value, userSignInPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user")
    window.location.href = 'signInUserPage.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
});
}


