
var registerView = document.getElementById('register');//HTML DE REGIStER
var loginView = document.getElementById('login');//HTML DE LOGIN
var homeView = document.getElementById('home');//HTML DE HOME

var loginRegisterLink = loginView.querySelector('a'); //referencia a las etiquetas anchor de loginview
var registerLoginLink = registerView.querySelector('a'); //referencia a las etiquetas anchor de loginview
//var loginButton = loginView.querySelector('button'); //referencia a las etiquetas button de loginview

registerView.style.display = 'none'
homeView.style.display = 'none';

/*

display none al primer formulario, el de registro. Usamos el document.getElementById("nombre de la clase"). En este caso se le da estilo, 
pero podemos hacer bastantes cosas


*/

//STORAGE
//Borrar para coger el input del user
var users = [
    {
        name: 'Edgar Moreno',
        email: 'edgar.moreno.req@gmail.com',
        password: '123'
    },

    {
        name: 'Dupin',
        email: 'abc@gmail.com',
        password: '123'
    }
];





//REGISTER
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
    var email = emailInput.value;

    //COMPROBAMOS SI EL EMAIL EXISTE YA EN A BASE DE DATOS
    var userFound = false;

    for (var i = 0; i < users.length && !userFound; i++) {
        var user = users[i];

        if (user.email === email)
            userFound = true;
    }

    if (userFound) {

        alert('User alredy exists')
        return
    }

    else {

        var nameInput = registerForm.querySelector('#name')
        var passwordInput = registerForm.querySelector('#password')
        var name = nameInput.value;
        var password = passwordInput.value;

        var user = {};

        user.name = name;
        user.email = email;
        user.password = password;

        //TODO check user is new, otherwise show error
        //el unico dato que se usa para comprobar es el email.


        users.push(user);

        nameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''

        registerView.style.display = 'none';
        loginView.style.display = 'block';

    }


}

//LOGIN
var loginForm = loginView.querySelector('form');

loginForm.onsubmit = function (event) {
event.preventDefault();

var emailInput = loginForm.querySelector('#email');
var email = emailInput.value;

var foundUser = null;

for (var i = 0; i < users.length && !foundUser; i++ ){
var user = users[i];

if (user.email === email){
    foundUser = user;
    
}


}

if (!foundUser){
    alert('User not found');
    return;

}

var passwordInput = loginForm.querySelector('#password');
var password = passwordInput.value;

if (foundUser.password !== password){

    alert('Wrong credentials')
    return;
}

emailInput.value = ''
passwordInput.value = ''

var homeTitle = homeView.querySelector('h1')

homeTitle.innerText = 'Hello, ' + foundUser.name + '!'

loginView.style.display = 'none'
homeView.style.display = 'block'


}


//TO DO Implement login functionally





