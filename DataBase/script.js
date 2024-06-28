  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth,
     onAuthStateChanged,
    } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCEqH-ZNy_boWxxzc7P6siB2GS6N3g9QFg",
    authDomain: "zayyanfbs.firebaseapp.com",
    projectId: "zayyanfbs",
    storageBucket: "zayyanfbs.appspot.com",
    messagingSenderId: "77558635078",
    appId: "1:77558635078:web:4270209dc7fc98b5c40847",
    measurementId: "G-S44H6Z2XS2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log("Checking===> ",app)
  const analytics = getAnalytics(app);
  
  
  const auth = getAuth(app);
  console.log("auth===> ",auth)


  onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User LogIn")
       const uid = user.uid;
    } else {
        console.log("User Logout")
    }
  });
  