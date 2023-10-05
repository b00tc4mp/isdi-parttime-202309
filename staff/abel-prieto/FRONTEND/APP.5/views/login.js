// LOGIN VIEW

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

        var user = retrieveUser(email)

        settingsLink.innerText = user.name 

        emailLoggedIn = email

        homeView.style.display = 'block'
        logoutButton.style.display = 'block'
        loginView.style.display = 'none'

    } catch (error) {
        alert(error.message)
    }
}