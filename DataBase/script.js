import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
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
const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log("Checking===> ", app);
console.log("auth===> ", auth);

// Taking Elements From HTML
const optionBox = document.getElementById("optionBox");
const signInBox = document.getElementById("signInBox");
const createNewAccountBox = document.getElementById("createNewAccountBox");
const signInBtn = document.getElementById("signInBtn");
const createNewAccountBtn = document.getElementById("createNewAccountBtn");
const userEmail = document.getElementById("userEmail");
const signIn = document.getElementById("signIn");
const newUserName = document.getElementById("newUserName");
const newUserEmail = document.getElementById("newUserEmail");
const createNewAccount = document.getElementById("createNewAccount");

document.addEventListener("DOMContentLoaded", () => {
    signInBtn.addEventListener("click", () => {
        optionBox.style.display = "none";
        signInBox.style.display = "flex";
    });

    createNewAccountBtn.addEventListener("click", () => {
        optionBox.style.display = "none";
        createNewAccountBox.style.display = "flex";
    });
});
