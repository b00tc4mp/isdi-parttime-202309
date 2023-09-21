document.getElementById('register').style.display = 'none';

var registerView = document.getElementById('register');
var loginView = document.getElementById('login');
var registerLoginLink = registerView.querySelector('a');
var loginRegisterLink = loginView.querySelector('a');
var users = []

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


var registerForm = document.querySelector('#tuFormularioID');

registerForm.onsubmit = function (event) {
    event.preventDefault();

    var name = registerForm.querySelector('#name').value;
    var email = registerForm.querySelector('#email').value;
    var password = registerForm.querySelector('#password').value;

    var user = {};

    user.name = name;
    user.email = email;
    user.password = password;

    users.push(user);

    registerView.style.display = 'none';
    loginView.style.display = 'block';
}


