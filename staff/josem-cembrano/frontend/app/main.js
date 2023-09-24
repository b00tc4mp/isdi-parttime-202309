var users = [];
var user = {};

var loginView = document.getElementById('login');
var registerView = document.getElementById('register');
var homeView = document.getElementById('home');
registerView.style.display = 'none';
homeView.style.display = 'none';

var registerLoginLink = document.getElementById('registerLoginLink');
var loginRegisterLink = document.getElementById('loginRegisterLink');

registerLoginLink.onclick = function (event) {
    event.preventDefault();

    registerView.style.display = 'none';
    loginView.style.display = 'block';
};

loginRegisterLink.onclick = function (event) {
    event.preventDefault();

    loginView.style.display = 'none';
    registerView.style.display = 'block';
};

var registerForm = document.getElementById('registerForm');
registerForm.onsubmit = function (event) {
    event.preventDefault();

    var nameInput = registerForm.querySelector('#name');
    var emailInput = registerForm.querySelector('#email');
    var passwordInput = registerForm.querySelector('#password');

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    // Verificar si el usuario ya existe
    var userExists = users.some(function (user) {
        return user.email === email;
    });

    if (userExists) {
        // Mostrar un mensaje de error o tomar alguna acción adecuada
        alert('Este usuario ya ha sido registrado');
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    } else {
        // Si el usuario no existe, agregarlo a la lista de usuarios
        user = {
            name: name,
            email: email,
            password: password
        };

        // TODO: Verificar y agregar el usuario a tu base de datos o arreglo de usuarios
        users.push(user);

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';

        registerView.style.display = 'none';
        loginView.style.display = 'block';
    }
};

function loginUser(email, password) {
    // Verificar si el usuario existe en la base de datos
    var user = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        // Iniciar sesión exitosa, redirigir al usuario a la página de bienvenida
        loginView.style.display = 'none';
        homeView.style.display = 'block';
    } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}

var loginForm = document.getElementById('loginForm');
loginForm.onsubmit = function (event) {
    event.preventDefault();

    var emailInput = loginForm.querySelector('#loginEmail');
    var passwordInput = loginForm.querySelector('#loginPassword');

    var email = emailInput.value;
    var password = passwordInput.value;

    // Llamar a la función de inicio de sesión
    loginUser(email, password);
};


