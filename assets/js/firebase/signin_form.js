import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './show_message.js';

const signinForm = document.querySelector("#signin-form");
signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userEmail = signinForm["email-signin"].value; // Usamos userEmail para almacenar el correo electrónico del formulario
    const password = signinForm["password-signin"].value;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, userEmail, password); // Pasamos userEmail a la función signInWithEmailAndPassword
        console.log(userCredentials);

        // Obtener el usuario actualmente autenticado
        var user = userCredentials.user;

        if (user) {
            // El usuario está autenticado, obtener su información de perfil
            var displayName = user.displayName;
            var email = user.email;
            var photoURL = user.photoURL;

            // Mostrar la foto de perfil en la página web
            var profileImage = document.getElementById('profile-image');
            profileImage.src = photoURL;
        }

        showMessage("Bienvenid@ de nuevo ", "success");

        setTimeout(() => {
            window.location.href = "principal.html";
        }, 2000);

    } catch (error) {
        console.log(error.code)
        if (error.code === 'auth/wrong-password') {
            showMessage("Contraseña incorrecta", "error");
        } else if (error.code === 'auth/user-not-found') {
            showMessage("Usuario no encontrado", "error");
        } else if (error.code === 'auth/invalid-credential') {
            showMessage("Credencial inválida", "error");
        } else {
            showMessage("Algo salió mal", "error");
        }
    }
});
