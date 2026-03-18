document.getElementById('registrationForm').addEventListener('submit', function(e) {


    e.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageDiv = document.getElementById('message');

    let errors = [];

    if (username.length < 4) {
        errors.push("El nombre de usuario debe tener al menos 4 caracteres.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("El correo electrónico no es válido.");
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        errors.push("La contraseña debe tener al menos 8 caracteres e incluir letras y números.");
    }

    if (errors.length > 0) {
        messageDiv.innerHTML = errors.join('<br>');
        messageDiv.className = "error";
    } else {
        messageDiv.innerHTML = "¡Registro exitoso!";
        messageDiv.className = "success";
    }
});