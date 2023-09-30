//REGISTER
var registerView = document.getElementById('register');
registerView.style.display = 'none';
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

        clearFormFields(registerForm);

        registerView.style.display = 'none'
        loginView.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
}

//LOGIN
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

        loginView.style.display = 'none'
        homeView.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
}

//HOME
var homeView = document.getElementById('home');
homeView.style.display = 'none';

//Go back
var goBackButton = homeView.querySelector('#goback');

goBackButton.onclick = function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    loginView.style.display = 'block'
}


//Change password
var passwordChangeForm = homeView.querySelector('#changepassform');
passwordChangeForm.style.display = 'none';

changePasswordButton.onclick = function (event) {
    event.preventDefault();
    homeView.style.display = 'none';
    passwordChangeForm.style.display = 'block';
}


//Change e-mail
var emailChangeForm = homeView.querySelector('#changeemailform');
emailChangeForm.style.display = 'none';

changeEmailButton.onclick = function (event) {
    event.preventDefault();
    homeView.style.display = 'none';
    passwordChangeForm.style.display = 'none';
    emailChangeForm.style.display = 'block';
}

