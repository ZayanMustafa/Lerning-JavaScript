import { auth,  } from './fireBase.js';


const username = "User";
document.querySelector('.logout-container').innerHTML += `
      <p class="animate__animated animate__fadeInUp mt-2">See you next time, ${username} ! 👋</p>`;

      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = 'index.html';
      }).catch((error) => {
        // An error happened.
      });