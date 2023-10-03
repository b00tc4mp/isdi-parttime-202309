var loginView = document.getElementById('login');
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

        clearFormFields(loginForm);

        var homeTitle = homeView.querySelector('h1')

        var user = retrieveUser(email)

        homeTitle.innerText = 'Welcome!👋 ' + user.name + '!'

        emailLoggedIn = email

        loginView.style.display = 'none'
        homeView.style.display = 'block'
        passwordChangeForm.style.display = 'none'
        emailChangeForm.style.display = 'none'
    } catch (error) {
        alert(error.message)
    }
}