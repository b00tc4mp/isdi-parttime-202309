//storage

var users = []

function registerUser(name, email, password) {
    var user = {
        name: name,
        email: email,
        password: password
    }

}

//register

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

    var user = {}

    user.name = name
    user.email = email
    user.password = password


    // TODO check user is a new, otherwise show error

    users.push(user)

    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

    registerView.style.display = 'none'
    loginView.style.display = 'block'

    console.log(user)

}

//login

var loginView = document.getElementById('login')
var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = 'block'

    //TODO implement login functionality

}


//home

var homeView = document.getElementById('home')

homeView.style.display = 'none'

console.log('Lista de usuarios:', users);






