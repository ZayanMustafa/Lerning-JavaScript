// Import Firebase functions
import { auth, signOut } from './fireBase.js';

// Display a farewell message
const username = "User"; // You can dynamically get the user's name if needed
document.querySelector('.logout-container').innerHTML += `
      <p class="animate__animated animate__fadeInUp mt-2">See you next time, ${username} ! 👋</p>`;

// Get the auth instance and sign out
signOut(auth).then(() => {
  // Sign-out successful, redirect to index.html
  window.location.href = 'index.html';
}).catch((error) => {
  // Handle errors here
  console.error('Error signing out:', error);
});
