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

        //////////

        // var sendNewEmail = document.getElementById('change_email')

        // sendNewEmail.onclick = function(event) {
        //     event.preventDefault()

        //     registerView.style.display = 'none'
        //     loginView.style.display = 'none'
        //     homeView.style.display = 'block'
        //     homeButton.style.display = 'block'
        // }

        // var sendNewPassword = document.getElementById('change_password')

        // sendNewPassword.onclick = function(event) {
        //     event.preventDefault()

        //     registerView.style.display = 'none'
        //     loginView.style.display = 'none'
        //     homeView.style.display = 'block'
        //     homeButton.style.display = 'block'
        // }

        // var changeEmailForm = homeView.querySelector('form')

        // changeEmailForm.onsubmit = function(event) {
        //     event.preventDefault()

        //     var newEmailInput = homeView.querySelector('#new_email')        
        //     var newEmail = newEmailInput.value

        //     var email = findUserByEmail(email)

        //     changeActualEmail(email)

        //     newEmailInput.value = '';
        // }
    } catch (error) {
        alert(error.message)
    }
}

// HOME VIEW

var homeView = document.getElementById('home')

homeView.style.display = 'none'

// BUTTON LOGOUT

var homeButton = document.getElementById('home_button')

homeButton.onclick = function (event) {
    event.preventDefault()
    
    registerView.style.display = 'none'
    homeView.style.display = 'none'
    homeButton.style.display = 'none'
    loginView.style.display = 'block'
}
