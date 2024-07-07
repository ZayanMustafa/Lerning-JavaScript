 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
 import { getAuth , 
          onAuthStateChanged, 
          createUserWithEmailAndPassword , 
         
        } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
 
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAkQtQsZ6VoJEfa86G_NaCPK-cmXdOv5Iw",
   authDomain: "firsteducationlwebsite.firebaseapp.com",
   projectId: "firsteducationlwebsite",
   storageBucket: "firsteducationlwebsite.appspot.com",
   messagingSenderId: "757131881060",
   appId: "1:757131881060:web:e451a4f1e4b6df46cd8d71",
   measurementId: "G-21G3G4LZBX"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const newUserEmail = document.getElementById("userEmailNew");
const signUpPassword = document.getElementById("userPassword");
const accountCreate = document.getElementById("createAccountBtn");

accountCreate.addEventListener("click", createUserAccount);

// Firebase Auth State Change Listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is Logged In");
    const uid = user.uid;
    console.log(firstNameInput.value + " " + lastNameInput.value); // Concatenate first and last name
  } else {
    console.log("User is Not Logged In");
  }
});

// Function to create a user account
function createUserAccount() {
  console.log("UserEmail ==> ", newUserEmail.value);
  console.log("UserPassword ==> ", signUpPassword.value);
  
  // Correct usage: pass values instead of elements
  createUserWithEmailAndPassword(auth, newUserEmail.value, signUpPassword.value)
  .then((userCredential) => {
    console.log("User Created: ", userCredential.user);
    // You can add further logic here for successful sign-up
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    console.error("Error creating user:", error);
  });
  alert("Ban gaya account")
}
  

export{ auth }
