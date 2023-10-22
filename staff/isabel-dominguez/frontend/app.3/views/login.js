var loginView = document.getElementById('login');
var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
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

        var user = retrieveUser(email)

        profileLink.innerText = user.name

        emailLoggedIn = email

        loginView.style.display = 'none'
        homeView.style.display = ''
        passwordChangeForm.style.display = 'none'
        emailChangeForm.style.display = 'none'
    } catch (error) {
        alert(error.message)
    }
}