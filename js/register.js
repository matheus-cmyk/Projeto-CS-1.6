import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Usuário cadastrado:", userCredential.user);
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Erro ao cadastrar:", error.message);
    });
});
