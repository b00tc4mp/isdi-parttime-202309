// Obtención de elementos del DOM y ocultamiento inicial:

var loginView = document.getElementById('login')
var homeView = document.getElementById('home')
var registerView = document.getElementById('register')

registerView.style.display = 'none'
homeView.style.display = 'none'

// Obtencion de enlaces de cambio de vista

var loginLink = registerView.querySelector('a')
var registerLink = loginView.querySelector('a')

// Array para almacenar los usuarios

var users = []

// Manejo de eventos para cambiar entre vistas

loginLink.onclick = function (event) {
    event.preventDefault()
    registerView.style.display = 'none'
    loginView.style.display = 'block'
}

registerLink.onclick = function (event) {
    event.preventDefault()
    registerView.style.display = 'block'
    loginView.style.display = 'none'

}

// Manejo del formulario de registro

var registerForm = registerView.querySelector('form')

registerForm.onsubmit = function (event) {
    event.preventDefault();

    var nameInput = registerForm.querySelector('#name');
    var emailInput = registerForm.querySelector('#registerEmail');
    var passwordInput = registerForm.querySelector('#registerPassword');

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    if (name === '' || email === '' || password === '') {
        alert('Please enter your name, email, and password.');
    } else {
        var userExists = users.some(function (user) {
            return user.email === email;
        });

        if (userExists) {
            alert('The user already exists. Please log in instead of registering.');
        } else {
            var user = {
                name: name,
                email: email,
                password: password
            };

            users.push(user);

            nameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';

            registerView.style.display = 'none';
            loginView.style.display = 'block';
        }
    }
};


// Manejo del formulario de inicio de sesion

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
    event.preventDefault();

    var emailInput = loginForm.querySelector('#loginEmail')
    var passwordInput = loginForm.querySelector('#loginPassword')

    var email = emailInput.value
    var password = passwordInput.value

    var user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (user) {

        var username = user.name

        loginView.style.display = 'none'
        homeView.style.display = 'block'
        document.getElementById('username').textContent = `Hello, ${username}!`

    } else {

        alert('The E-mail or password is incorrect. Please try again')
    }
}



