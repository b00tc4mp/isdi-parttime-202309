var registerView = document.getElementById('register')
var homeView = document.getElementById('home')
var loginView = document.getElementById('login')

registerView.style.display = 'none'
homeView.style.display = 'none'

var registerLoginLink = registerView.querySelector('a')
var loginRegisterLink = loginView.querySelector('a')

//base de datos
var users = []

//Vista Login 
loginRegisterLink.onclick = function (event) {
    event.preventDefault()
    loginView.style.display = 'none'
    registerView.style.display = 'block'
};

//register
var registerForm = registerView.querySelector('form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name')
    var emailInput = registerForm.querySelector('#email')
    var passwordInput = registerForm.querySelector('#password')

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value
    //busqueda de usuarios existentes creando userExists y con some buscamos coincidencias que devuelve el correo del usuario
    var userExists = users.some(function (user) {
        return user.email === email
    })
    //alerta exite
    if (userExists) {
        alert('The user already exists. Please log in instead of registering.')
    //Sino guardamos y push y cambia la vista
    } else {
        var user = {
            name: name,
            email: email,
            password: password
        }
        users.push(user)

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';

        registerView.style.display = 'none'
        loginView.style.display = 'block'
    }
}

//No dejar entrar en blanco o null
/*
var form = document.getElementById('register')
    form.addEventListener('submit', function(evt){
    evt.preventDefault()
    var mensajesError = []

    if(email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu nombre')
    }

    if(passwordInput.value === null || passwordInput.value === ''){
        mensajesError.push('Ingresa tu nombre')
    }
})*/

//login
var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
    event.preventDefault();

    var emailInput = loginForm.querySelector('#email')
    var passwordInput = loginForm.querySelector('#password')

    var email = emailInput.value
    var password = passwordInput.value

//comprobacion find
    var user = users.find(function (user) {
        return user.email === email && user.password === password
    });


//home and error


    if (user) {
        var username = user.name

        loginView.style.display = 'none'
        homeView.style.display = 'block'

        document.getElementById('username').textContent = `Hello, ${username}!`
    //Sino es correcto alerta
    } else 
        alert('The E-mail or password is incorrect. Please try again.')
    }

