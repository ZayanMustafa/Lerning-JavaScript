//  Import From Fire Base
import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from './fireBase.js';

// Elements from HTML
const newUserEmail = document.getElementById("userEmailNew");
const signUpPassword = document.getElementById("userPassword");
const accountCreate = document.getElementById("createAccountBtn");

// Event listener for create account button
accountCreate.addEventListener("click", createUserAccount);

// Function to create user account
function createUserAccount() {
    createUserWithEmailAndPassword(newUserEmail.value, signUpPassword.value)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log("User created:", user);
            window.location.href = 'signIn.html'; 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error creating user:", errorMessage);
            alert(errorMessage);
        });
}
