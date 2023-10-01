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

    try {
        registerUser(name, email, password)

        nameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''

        registerView.style.display = 'none'
        loginView.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
}

// login

var loginView = document.getElementById('login')
var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = 'block'
}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email')
    var passwordInput = loginForm.querySelector('#password')

    var email = emailInput.value
    var password = passwordInput.value

    try {
        authenticateUser(email, password)

        emailInput.value = ''
        passwordInput.value = ''

        var homeTitle = homeView.querySelector('h1')

        var user = retrieveUser(email)

        homeTitle.innerText = 'Hello, ' + user.name + '!'

        loginView.style.display = 'none'
        homeView.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
}

// home

var homeView = document.getElementById('home')

homeView.style.display = 'none'


// changemail 
var changemailview = document.getElementById('changemail')

changemailview.style.display = 'none'

var changemailLoginLink = changemailview.querySelector('a')

changemailLoginLink.onclick = function (event) {
    event.preventDefault()

    changemailview.style.display = 'block'
    homeView.style.display = 'none'
}

var mailForm = registerView.querySelector('form')

mailForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = mailForm.querySelector('#email')
    var passwordInput = mailForm.querySelector('#password')

    var email2 = emailInput.value
    var password2 = passwordInput.value
}

// changepassword

var changepasswordview = document.getElementById('changepassword')

changepasswordview.style.display = 'none'

var changempasswordLink = changepasswordview.querySelector('a')

changempasswordLink.onclick = function (event) {
    event.preventDefault()

    changemailview.style.display = 'block'
    homeView.style.display = 'none'
}

var passwordForm = registerView.querySelector('form')

mailForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = passwordForm.querySelector('#email')
    var passwordInput = passwordForm.querySelector('#password')

    var email2 = emailInput.value
    var password2 = passwordInput.value
}
