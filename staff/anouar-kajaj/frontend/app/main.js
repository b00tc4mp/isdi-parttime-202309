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

var registerTogglePasswordCheckbox = registerForm.querySelector('#toggle-password')
registerTogglePasswordCheckbox.onchange = function () {
    var passwordInput = registerForm.querySelector('#password')

    if (registerTogglePasswordCheckbox.checked) {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password"
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

var emailLoggedIn = null

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var passwordInput = loginForm.querySelector('#password')
    var emailInput = loginForm.querySelector('#email')

    var email = emailInput.value
    var password = passwordInput.value

    try {
        authenticateUser(email, password)
        emailInput.value = ''
        passwordInput.value = ''

        var homeTitle = homeView.querySelector('h1')

        var user = retrieveUser(email)

        homeTitle.innerText = 'Hello, ' + user.name + '!'

        emailLoggedIn = email

        loginView.style.display = 'none'
        homeView.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
}

var loginTogglePasswordCheckbox = loginForm.querySelector('#toggle-password')
loginTogglePasswordCheckbox.onchange = function () {
    var passwordInput = loginForm.querySelector('#password')

    if (loginTogglePasswordCheckbox.checked) {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password"
    }
}


// home


var homeView = document.getElementById('home')

homeView.style.display = 'none'

var logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
    homeView.style.display = 'none'
    loginView.style.display = 'block'
}

var changeEmailForm = homeView.querySelector('#change-email-form')

changeEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmailInput = changeEmailForm.querySelector('#new-email')
    var newEmailConfirmInput = changeEmailForm.querySelector('#new-email-confirm')
    var passwordInput = changeEmailForm.querySelector('#password')

    var newEmail = newEmailInput.value
    var newEmailConfirm = newEmailConfirmInput.value
    var password = passwordInput.value

    try {
        changeUserEmail(emailLoggedIn, newEmail, newEmailConfirm, password)

        alert('E-mail changed')

        newEmailInput.value = ''
        newEmailConfirmInput.value = ''
        passwordInput.value = ''
    } catch (error) {
        alert(error.message)
    }
}
