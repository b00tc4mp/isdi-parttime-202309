//Register

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

var viewCredentials = document.getElementById('settings')

viewCredentials.style.display = 'none'


///////////////////////////////

user = true

var changeEmailButton = document.getElementById('changeEmail');
var changePasswordButton = document.getElementById('changePassword');
var viewNewEmail = document.getElementById("viewChangeEmail")
var viewNewPassword = document.getElementById("viewChangePassword")
viewNewPassword.style.display = 'none';
viewNewEmail.style.display = 'none';
var viewhomeuser = function () {
if (user) {

    changeEmailButton.style.display = 'block';
    changePasswordButton.style.display = 'block';
} else {

    changeEmailButton.style.display = 'none';
    changePasswordButton.style.display = 'none';
  }
}

var homeElement = document.getElementById('home'); // Selecciona el elemento <div> con el ID "home"
var privacityLink = homeElement.querySelector('#privacity'); // Selecciona el elemento <a> con el ID "privacity"
var changeCredentialsButton = privacityLink.querySelector('button');




changeCredentialsButton.onclick = function (event) {
    event.preventDefault()

    changeCredentialsButton.style.display = 'none'
    viewCredentials.style.display = 'block'

}



var changeEmailView = document.getElementById('changeEmail')

changeEmailView.addEventListener("click", function (event) {
    event.preventDefault()

    changeEmailButton.style.display = 'none'
    changePasswordButton.style.display = 'none' 
    viewNewEmail.style.display = 'block'
});



var viewDivEmail = document.getElementById("viewChangeEmail")

linkChangeEmail.onclick = function (event) {
    event.preventDefault()

    changeEmailView.style.display = 'block'
    changePasswordView.style.display = "block"
    viewDivEmail.style.display = "none"

}


var changePasswordView = document.getElementById('changePassword')
changePasswordView.style.display = "none"

var linkChangePassword = changePasswordView.querySelector('a')

linkChangePassword.onclick = function (event) {
    event.preventDefault()

    changePasswordView.style.display = 'none'
    changeEmailView.style.display = "block"

}




////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

