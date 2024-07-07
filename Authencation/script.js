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
 console.log("App==>" ,app)
 const analytics = getAnalytics(app);
 console.log("Analytics App" , analytics)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
console.log("auth==>" ,auth)


const signUpEmail = document.getElementById("userEmail")
const signUpPassword = document.getElementById("userPassword")
const accountCreate = document.getElementById("createAccountBtn")




accountCreate.addEventListener("click", createUserAccount)



onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is Log In")
        // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
        console.log("User is Not Log In")
      // User is signed out
      // ...
    }
  });
  

function createUserAccount () {
  console.log("UserEmail==>", signUpEmail.value)
  console.log("UserPassword==>", signUpPassword.value)
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
  .then((userCredential) => {
    console.log("User===>" , user)
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

}