// REGISTER VIEW

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
    
    var emailInput = registerForm.querySelector('#email')
    var nameInput = registerForm.querySelector('#username')
    var passwordInput = registerForm.querySelector('#password')

    var email = emailInput.value
    var username = nameInput.value
    var password = passwordInput.value

    var userRegistered = registerUser(username, email, password) // DUDA, meter en datos (?)

    if (!userRegistered) {
        alert('User already exist')

        return
    }

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    registerView.style.display = 'none';
    loginView.style.display = 'block';
}
// LOGIN VIEW

var loginView = document.getElementById('login')

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function(event) {
    event.preventDefault() 

    loginView.style.display = 'none'
    registerView.style.display = 'block'
}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function(event) {
    event.preventDefault() 

    var emailInput = loginForm.querySelector('#email')
    var passwordInput = loginForm.querySelector('#password')

    var email = emailInput.value 
    var password = passwordInput.value

    userAlreadyCreatedByEmail(email)

    if (!foundUser) {
        alert('User not found')

        return
    }   

    if (foundUser.password !== password) {
        alert('Wrong credentials')

        return
    }

    emailInput.value = ''
    passwordInput.value = ''

    showMessage();

    loginView.style.display = 'none'
    homeView.style.display = 'block'
}

// HOME VIEW

var homeView = document.getElementById('home')
homeView.style.display = 'none'


