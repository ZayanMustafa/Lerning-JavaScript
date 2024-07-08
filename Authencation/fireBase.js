 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
 import { getAuth , 
          onAuthStateChanged, 
          createUserWithEmailAndPassword , 
          signInWithEmailAndPassword,
          signOut,
         
        } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
 

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

// Firebase Auth State Change Listener
onAuthStateChanged(auth, (user) => {
  if (user) {
      window.location.href = 'signInUserPage.html';
      const uid = user.uid;
  } else { 
      window.location.href = 'index.html';
  }
});

// Export  From FireBase
export { auth ,
         onAuthStateChanged , 
         createUserWithEmailAndPassword , 
         signInWithEmailAndPassword ,
         signOut,
         };






