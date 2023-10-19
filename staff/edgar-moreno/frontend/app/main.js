
var registerView = document.getElementById('register');//HTML DE REGIStER
var loginView = document.getElementById('login');//HTML DE LOGIN
var homeView = document.getElementById('home');//HTML DE HOME

var loginRegisterLink = loginView.querySelector('a'); //referencia a las etiquetas anchor de loginview
var registerLoginLink = registerView.querySelector('a'); //referencia a las etiquetas anchor de loginview
//var loginButton = loginView.querySelector('button'); //referencia a las etiquetas button de loginview

registerView.style.display = 'none'
homeView.style.display = 'none';

//PRESENTATION (VIEW)
loginRegisterLink.onclick = function (event) {
    event.preventDefault();

    loginView.style.display = 'none'
    registerView.style.display = 'block'
    //queremos apagar la pantalla login y sacar la otra

}
//BOTONES PARA CAMBIAR DE VISTA LOGIN /REGISTER
registerLoginLink.onclick = function (event) {
    event.preventDefault();

    registerView.style.display = 'none'
    loginView.style.display = 'block'
}



var registerForm = registerView.querySelector('form') //OBJETO DE FORMULARIO

registerForm.onsubmit = function (event) {
    event.preventDefault();

    var emailInput = registerForm.querySelector('#email')
    var nameInput = registerForm.querySelector('#name')
    var passwordInput = registerForm.querySelector('#password')

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    var userRegistered = registerUser(name, email, password);

    if (!userRegistered) {
        alert('User alredy exists')
        return
    }

    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

    registerView.style.display = 'none';
    loginView.style.display = 'block';

}



//LOGIN
var loginForm = loginView.querySelector('form');

loginForm.onsubmit = function (event) {

    var emailInput = loginForm.querySelector('#email');
    var passwordInput = loginForm.querySelector('#password');

    var email = emailInput.value;
    var password = passwordInput.value;

    var userAuthenticated = authenticateUser(email, password);

    if (!userAuthenticated) {
        alert('Wrong credentials');
        return;
    }
    emailInput.value = ''
    passwordInput.value = ''

    var homeTitle = homeView.querySelector('h1')

    var retrieveUser = retrieveUser(email);

    homeTitle.innerText = 'Hello, ' + foundUser.name + '!'

    loginView.style.display = 'none'
    homeView.style.display = 'block'
}




//TO DO Implement login functionally





