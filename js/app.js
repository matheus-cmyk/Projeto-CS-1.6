import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email)
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Usuário logado:", userCredential.user);
      window.location.href = "dashbord.html";
    })
    .catch((error) => {
      console.error("Erro ao fazer login:", error.message);
    });
});
