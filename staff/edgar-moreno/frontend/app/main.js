
var registerView = document.getElementById('register');
var loginView = document.getElementById('login');
var homeView = document.getElementById('home');

var loginRegisterLink = loginView.querySelector('a'); //referencia a las etiquetas anchor de loginview
var registerLoginLink = registerView.querySelector('a');

registerView.style.display ='none' 
homeView.style.display = 'none';

/*

display none al primer formulario, el de registro. Usamos el document.getElementById("nombre de la clase"). En este caso se le da estilo, pero podemos hacer bastantes cosas


*/

//STORAGE

var users = [];





//REGISTER
loginRegisterLink.onclick = function(event){
    event.preventDefault();

    loginView.style.display ='none'
    registerView.style.display = 'block'
    //queremos apagar la pantalla login y sacar la otra
    //TO DO Implement login functionally
}

registerLoginLink.onclick = function (event){
    event.preventDefault();

    registerView.style.display = 'none'
    loginView.style.display ='block'
}


var registerForm = registerView.querySelector('form') //OBJETO DE FORMULARIO

registerForm.onsubmit = function(event){
    event.preventDefault();

    var nameInput = registerForm.querySelector('#name')
    var emailInput = registerForm.querySelector('#email')
    var passwordInput = registerForm.querySelector('#password')


   var name = nameInput.value;
   var email = emailInput.value;
   var password = passwordInput.value;
    var user = {};

    user.name = name;
    user.emial = email;
    user.password = password;

    //TODO check user is new, otherwise show error

    users.push(user);

    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

    registerView.style.display = 'none';
    loginView.style.display = 'block';
}

//home


