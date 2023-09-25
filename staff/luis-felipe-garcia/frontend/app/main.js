// storage
var users = [
    {'name': 'user1', 'email': 'email1@gmail.com', 'password': '111'},
    {'name': 'user2', 'email': 'email2@gmail.com', 'password': '222'},
    {'name': 'user3', 'email': 'email3@gmail.com', 'password': '333'},
];


// register

var registerView = document.getElementById('register');
registerView.style.display = 'none';

var registerToLoginLink = registerView.querySelector('a');
registerToLoginLink.onclick = function (event) {
    event.preventDefault();
    loginView.style.display = 'block';
    registerView.style.display = 'none';
};

var registerForm = registerView.querySelector('form');
registerForm.onsubmit = function(event) {
    event.preventDefault();

    var nameInput = registerForm.querySelector('#name');
    var emailInput = registerForm.querySelector('#email');
    var passwordInput = registerForm.querySelector('#password');

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    if (userAlredyExist(email)) {
        registerView.querySelector('#invalid_user').style.display = 'block';
    } else {

        var user = {};

        user.name = name;
        user.email = email;
        user.password = password;

        users.push(user);

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';

        loginView.style.display = 'block';
        registerView.style.display = 'none';
    }
}

// Chequear usuario/mail existente
var userAlredyExist = function (mail) {
    var mailsOfUsers = [];
    for (i = 0; i < users.length; i++) {
        mailsOfUsers.push(users[i].email);
        
    }
    if (mailsOfUsers.includes(mail)) {
        return true
    } else {
        return false
    }
}

// login

var loginView = document.getElementById('login');
loginView.style.display = 'block';
loginView.querySelector('#user_dont_exist').style.display = 'none'

var loginViewLink = loginView.querySelector('a');
loginViewLink.onclick = function(event) {
    event.preventDefault();
    loginView.style.display = 'none';
    registerView.style.display = 'block'
    registerView.querySelector('#invalid_user').style.display = 'none';
}

var loginForm = loginView.querySelector('form');
loginForm.onsubmit = function (event) {
    event.preventDefault();

    var userMail = loginForm.querySelector('#email').value;
    var userPassword = loginForm.querySelector('#password').value;

    if (userAlredyExist(userMail)) {
        var indexOfUser = users.findIndex(function(user){
            return user.email === userMail;
            
        });

        var passwordOfUser = users[indexOfUser].password;
        if (userPassword === passwordOfUser) {
            loginView.style.display = 'none';
            homeView.style.display = 'block';

            var wellcomeMessage = document.createElement('h2');
            wellcomeMessage.textContent = `Hola ${users[indexOfUser].name}`;
            homeView.appendChild(wellcomeMessage);
        } else {
            loginView.querySelector("#user_dont_exist").style.display = 'block';
        }
    } else {
        loginView.querySelector("#user_dont_exist").style.display = 'block';
    }
}

var homeView = document.getElementById ('home');
homeView.style.display = 'none';

