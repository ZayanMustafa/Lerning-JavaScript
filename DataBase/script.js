// Import necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase configuration object containing API key and other info
const firebaseConfig = {
    apiKey: "AIzaSyCEqH-ZNy_boWxxzc7P6siB2GS6N3g9QFg",
    authDomain: "zayyanfbs.firebaseapp.com",
    projectId: "zayyanfbs",
    storageBucket: "zayyanfbs.appspot.com",
    messagingSenderId: "77558635078",
    appId: "1:77558635078:web:4270209dc7fc98b5c40847",
    measurementId: "G-S44H6Z2XS2"
};

// Initialize Firebase app with the configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics and Authentication
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Log to verify Firebase initialization
console.log("Checking===> ", app);
console.log("auth===> ", auth);

// Get HTML elements by their IDs
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
