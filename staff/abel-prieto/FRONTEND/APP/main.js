// STORAGE

var users = []
var userLogin = []
 

// REGISTER


var registerView = document.getElementById('register') 
registerView.style.display = 'none'
var registerLoginLink = registerView.querySelector('a')


registerLoginLink.onclick = function(event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = 'block'
}


var registerForm = registerView.querySelector('form')

registerForm.onsubmit = function(event) {
    event.preventDefault()
    
    var nameInput = registerForm.querySelector('#username')
    var emailInput = registerForm.querySelector('#email')
    var passwordInput = registerForm.querySelector('#password')
    
    var username = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value
    
    var user = {}
    
    user.username = username
    user.email = email
    user.password = password

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    // Busque el usuario registrado
    var isUsernameAvaliable = users.some(u => u.username === user.username || u.email === user.email)

    if (isUsernameAvaliable) {
        // Mensaje de ERROR
        document.getElementById('register').querySelector('p').innerText = 'Error: Account already exists';
    } else if (username === ''|| email === '' || password === '') {
        document.getElementById('register').querySelector('p').innerText = 'Error: Please, do it again';
    } else {
        // Continuar con el proceso de registro
        users.push(user)
        registerView.style.display = 'none';
        homeView.style.display = 'none';
        loginView.style.display = 'block';
    }
}

document.body.addEventListener('click', function() { // Hace que modifique nuevamente el <p> del ERROR al ORIGINAL.
    document.getElementById('register').querySelector('p').innerText = 'Create an account';
});


// LOGIN


var loginView = document.getElementById('login')

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function(event) {
    event.preventDefault() 

    loginView.style.display = 'none'
    homeView.style.display = 'none'
    registerView.style.display = 'block'
}

var loginForm = loginView.querySelector('form')


loginForm.onsubmit = function(event) {
    event.preventDefault() 

    var emailLoginInput = loginForm.querySelector('#email')
    var passwordLoginInput = loginForm.querySelector('#password')

    var emailLogin = emailLoginInput.value 
    var passwordLogin = passwordLoginInput.value

    emailLoginInput.value = ''
    passwordLoginInput.value = ''

    // Busque el usuario introducido en registro
    var checkEmailAndPassword = users.some(u => u.email === emailLogin && u.password === passwordLogin)

    if (checkEmailAndPassword) {
        //Entre el login y redirija a HOME
        registerView.style.display = 'none'
        loginView.style.display = 'none'
        homeView.style.display = 'block'
        exitView.style.display = 'block'

        var userLog = { // Coincida email y constraseña, las dos
            username: users.find(user => user.email === emailLogin && user.password === passwordLogin).username
        }

        userLogin.push(userLog)

        document.getElementById('home').querySelector('p').textContent = 'Welcome, ' + userLog.username 
    } else { 
        // Mensaje de ERROR
        document.getElementById('login').querySelector('p').innerText = 'Error: Email or password wrong. Try again'
    }
}

document.body.addEventListener('click', function() { // Hace que modifique nuevamente el <p> del ERROR al ORIGINAL.
    document.getElementById('login').querySelector('p').innerText = 'Introduce your email and password:';
});

// HOME


var homeView = document.getElementById('home')
homeView.style.display = 'none'



// BUTTON EXIT


var exitView = document.getElementById('exit')
var exitButton = document.getElementById('exit_button')
exitView.style.display = 'none'

exitButton.addEventListener('click', function(event) { // Salir del apartado LOGIN
    event.preventDefault() 

    exitView.style.display = 'none'
    homeView.style.display = 'none'
    registerView.style.display = 'none'
    loginView.style.display = 'block'

    userLogin.splice(0, 1)
})



