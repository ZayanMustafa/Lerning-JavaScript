import { auth , onAuthStateChanged, signInWithEmailAndPassword } from './fireBase.js';

const userSignEmail = document.getElementById("userEmail");
const userSignPassword = document.getElementById("userSignInPassword");
const signUpBtn = document.getElementById("logInBtn");

signUpBtn.addEventListener("click", signIn);


// Firebase Auth State Change Listener
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//          window.location.href = 'signInUserPage.html';
//         const uid = user.uid;
//     } else {
//       window.location.href = 'index.html';
//     }
// });


// Sign In Function 
function signIn (){
  signInWithEmailAndPassword(auth, userEmail.value, userSignInPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user")
    window.location.href = 'signInUserPage.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
});
}


