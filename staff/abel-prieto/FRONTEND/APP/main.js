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
        homeButton.style.display = 'block'

    } catch (error) {
        alert(error.message)
    }
}

// HOME VIEW

var homeView = document.getElementById('home')

homeView.style.display = 'none'


// CREDENTIALS VIEW

var changeEmailView = document.getElementById('select-email')

var sendNewEmail = changeEmailView.querySelector('#change_email')

sendNewEmail.onclick = function(event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = 'none'
    homeView.style.display = 'block'
    homeButton.style.display = 'block'
}

var checkEmailForm = changeEmailView.querySelector('form')

checkEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmailInput = emailForm.querySelector('#new_email')        
    var newEmail = newEmailInput.value

    try {
        checkNewEmail(newEmail)

        user.email = newEmail

        alert('Email changed succesfully!')

        newEmailInput = ''
    }

    catch {
        alert(error.message)
    }
}

var changePasswordView = document.getElementById('select-password')

 var sendNewPassword = document.querySelector('#change_password')

 sendNewPassword.onclick = function(event) {
     event.preventDefault()

     registerView.style.display = 'none'
     loginView.style.display = 'none'
     homeView.style.display = 'block'
     homeButton.style.display = 'block'
 }

 var changePasswordForm = changePasswordView.querySelector('form')

 changePasswordForm.onsubmit = function(event) {
     event.preventDefault()

     var currentPasswordInput = changePasswordForm.querySelector('#current_password')
     var newPasswordInput = changePasswordForm.querySelector('#new_password')
     var againNewPasswordInput = changePasswordForm.querySelector('#again_new_password')

     var currentPassword = currentPasswordInput.value
     var newPassword = newPasswordInput.value
     var againNewPassword = againNewPasswordInput.value

     try {
        checkNewPassword(currentPassword, newPassword, againNewPassword)

        user.password = newPassword
        
        alert('Password changed succesfully!')

        var currentPasswordInput = ''
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
