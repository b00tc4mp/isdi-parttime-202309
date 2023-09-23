//registro en DB y gestion de errores.

var users = []
var user = {}

var registerView = document.getElementById('register')
registerView.style.display = 'none'

var registerLoginLink = registerView.querySelector('a')



registerLoginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = 'block'
}



var registerForm = registerView.querySelector('form')



registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name')
    var emailInput = registerForm.querySelector('#email')
    var passwordInput = registerForm.querySelector('#password')

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    // Verificar si el usuario ya existe
    var userExists = users.some(function (user) {
        return user.email === email;
    });

    if (userExists) {
        // Mostrar un mensaje de error o tomar alguna acción adecuada
        alert('El usuario ya está registrado con este correo electrónico.');
    } else {
        // Si el usuario no existe, agregarlo a la lista de usuarios

        user = {
            name: name,
            email: email,
            password: password
        };

    // TODO check user is new, otherwise show error

    users.push(user)

    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

    registerView.style.display = 'none'
    loginView.style.display = 'block'
    }
}




// login

var loginView = document.getElementById('login')
var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = 'block'

    // TODO implement login functionality
}

// home

var homeView = document.getElementById('home')

homeView.style.display = 'none'



