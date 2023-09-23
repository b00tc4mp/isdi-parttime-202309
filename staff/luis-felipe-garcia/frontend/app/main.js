// storage
var users = [];

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

    var user = {};

    user.name = name;
    user.email = email;
    user.password = password;



    users.push(user);
    console.log(user)

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    loginView.style.display = 'block';
    registerView.style.display = 'none';
}




// login

var loginView = document.getElementById('login');
loginView.style.display = 'block';

var loginViewLink = loginView.querySelector('a');
loginViewLink.onclick = function(event) {
    event.preventDefault();
    loginView.style.display = 'none';
    registerView.style.display = 'block';
}

var homeView = document.getElementById ('home');
homeView.style.display = 'none';
