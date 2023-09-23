var registerView = document.getElementById('register');
var homeView = document.getElementById('home');
var loginView = document.getElementById('login');

registerView.style.display = 'none';
homeView.style.display = 'none';

var registerLoginLink = registerView.querySelector('a');
var loginRegisterLink = loginView.querySelector('a');

var users = [];

registerLoginLink.onclick = function (event) {
    event.preventDefault();
    registerView.style.display = 'none';
    loginView.style.display = 'block';
};

loginRegisterLink.onclick = function (event) {
    event.preventDefault();
    loginView.style.display = 'none';
    registerView.style.display = 'block';
};

var registerForm = registerView.querySelector('form');

registerForm.onsubmit = function (event) {
    event.preventDefault();

    var nameInput = registerForm.querySelector('#name');
    var emailInput = registerForm.querySelector('#email');
    var passwordInput = registerForm.querySelector('#password');

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    var userExists = users.some(function (user) {
        return user.email === email;
    });

    if (userExists) {
        alert('The user already exists. Please log in instead of registering.');
    } else {
        var user = {
            name: name,
            email: email,
            password: password
        };

        users.push(user);

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';

        registerView.style.display = 'none';
        loginView.style.display = 'block';
    }
};

var loginForm = loginView.querySelector('form');

loginForm.onsubmit = function (event) {
    event.preventDefault();

    var emailInput = loginForm.querySelector('#email');
    var passwordInput = loginForm.querySelector('#password');

    var email = emailInput.value;
    var password = passwordInput.value;

    var user = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        var username = user.name;

        loginView.style.display = 'none';
        homeView.style.display = 'block';
        document.getElementById('username').textContent = `Hello, ${username}!`;
    } else {
        alert('The E-mail or password is incorrect. Please try again.');
    }
};


// TODO check user is new, otherwise show error DONE
// TODO implement log in functionality DONE
// TODO show user name logged in when entering in Home (Hello, >name<!) DONE