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
        passwordChangeForm.style.display = 'none'
        emailChangeForm.style.display = 'none'
    } catch (error) {
        alert(error.message)
    }
}

//HOME
var homeView = document.getElementById('home');
homeView.style.display = 'none'

//Go back
var goBackButton = homeView.querySelector('#goback');

goBackButton.onclick = function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    loginView.style.display = 'block'
};

//Change password
var passwordChangeForm = document.getElementById('changepassform');
var changepassButton = document.getElementById('changepass');

changepassButton.onclick = function (event) {
    event.preventDefault();

    passwordChangeForm.style.display = 'block'
    emailChangeForm.style.display = 'none'
    changepassButton.style.display = 'none'
    changeemailButton.style.display = 'none'
};

passwordChangeForm.onsubmit = function (event) {
    event.preventDefault();

    var currentPassInput = passwordChangeForm.querySelector('#currentPassword');
    var newPassInput = passwordChangeForm.querySelector('#newPassword');
    // añadir confirm password

    var currentPass = currentPassInput.value;
    var newPass = newPassInput.value;

    try {
        // authenticateUser(email, currentPass);
        // poner aqui user.password = newPass ?
        updateUserPassword(currentPass, newPass); //añadir confirm password

        clearFormFields(passwordChangeForm);

        loginView.style.display = 'block';
        homeView.style.display = 'none';
        passwordChangeForm.style.display = 'none';
        emailChangeForm.style.display = 'none';
        changepassButton.style.display = 'inline-block'
        changeemailButton.style.display = 'inline-block'

    } catch (error) {
        alert(error.message);
    }
} 

//Change e-mail
var emailChangeForm = document.getElementById('changeemailform');
var changeemailButton = document.getElementById('changeemail');

changeemailButton.onclick = function (event) {
    event.preventDefault();

    emailChangeForm.style.display = 'block'
    passwordChangeForm.style.display = 'none'
    changepassButton.style.display = 'none'
    changeemailButton.style.display = 'none'
}

emailChangeForm.onsubmit = function (event) {
    event.preventDefault();

    var newEmailInput = emailChangeForm.querySelector('#newEmail');
    var currentEmailInput = emailChangeForm.querySelector('#currentEmail');

    var newEmail = newEmailInput.value;
    var currentEmail = currentEmailInput.value;

    try {
        // authenticateUser(email, password);
        updateUserEmail(currentEmail, newEmail);

        clearFormFields(emailChangeForm);

        loginView.style.display = 'none';
        homeView.style.display = 'none';
        passwordChangeForm.style.display = 'none';
        emailChangeForm.style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
}

var emailButtonChange = document.getElementById('emailbuttonchange');

emailButtonChange.onclick = function (event) {
    event.preventDefault();

    loginView.style.display = 'block';
    homeView.style.display = 'none';
    passwordChangeForm.style.display = 'none';
    emailChangeForm.style.display = 'none';
}