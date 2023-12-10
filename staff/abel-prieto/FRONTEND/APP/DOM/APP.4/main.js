// REGISTER VIEW

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

// LOGIN VIEW

var loginView = document.getElementById('login')
var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = 'block'
}

var loginForm = loginView.querySelector('form')

var loggedInEmail = null

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

        loggedInEmail = email

        loginView.style.display = 'none'
        homeView.style.display = 'block'
        homeButton.style.display = 'block'

    } catch (error) {
        alert(error.message)
    }
}

// HOME VIEW

var homeView = document.getElementById('home')

homeView.style.display = 'none'


// CREDENTIALS VIEW

var checkEmailForm = homeView.querySelector('#select-email')

checkEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmailInput = checkEmailForm.querySelector('#new_email')
    var confirmNewEmailInput = checkEmailForm.querySelector('#confirm-new-email')
    var passwordInput = checkEmailForm.querySelector('#password')
    
    var newEmail = newEmailInput.value
    var confirmNewEmail = confirmNewEmailInput.value
    var password = passwordInput.value

    try {
        changeUserEmail(loggedInEmail, newEmail, confirmNewEmail, password)

        alert('Email changed succesfully!')

        newEmailInput = ''
        confirmNewEmailInput = ''
        passwordInput = ''
    }

    catch (error) {
        alert(error.message)
    }
}

var changePasswordForm = homeView.querySelector('#select-password')

changePasswordForm.onsubmit = function(event) {
    event.preventDefault()

    var passwordInput = changePasswordForm.querySelector('#current_password')
    var newPasswordInput = changePasswordForm.querySelector('#new_password')
    var againNewPasswordInput = changePasswordForm.querySelector('#again_new_password')

    var password = passwordInput.value
    var newPassword = newPasswordInput.value
    var againNewPassword = againNewPasswordInput.value

    try {
        changeUserPassword(password, newPassword, againNewPassword)
        
        alert('Password changed succesfully!')

        var password = ''
        var newPasswordInput = ''
        var againNewPasswordInput = ''
    }

    catch {
        alert(error.message)
    }
}


// BUTTON LOGOUT

var homeButton = document.getElementById('home_button')

homeButton.onclick = function (event) {
    event.preventDefault()
    
    registerView.style.display = 'none'
    homeView.style.display = 'none'
    homeButton.style.display = 'none'
    loginView.style.display = 'block'
}
