import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBtjdPYqY-V4CSh-60OYXPhFYkhLzHf12g",
    authDomain: "projeto-final-fc14e.firebaseapp.com",
    projectId: "projeto-final-fc14e",
    storageBucket: "projeto-final-fc14e.firebasestorage.app",
    messagingSenderId: "880834845134",
    appId: "1:880834845134:web:7dfff2162133ffa0e6739f"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById('user-info').textContent = `Logado como: ${user.email}`;
  } else {
    window.location.href = 'dashbord.html';
  }
});

const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log("Usuário deslogado");
    window.location.href = 'index.html';
  }).catch((error) => {
    console.error("Erro ao deslogar:", error.message);
  });
});
