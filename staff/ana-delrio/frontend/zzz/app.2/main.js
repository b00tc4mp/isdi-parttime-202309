// presentation (view)

var registerView = document.getElementById('register')

registerView.style.display = 'none'

var registerLoginLink = registerView.querySelector('a')

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = 'block'
}

var registerForm = registerView.querySelector('form')


registerForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = registerForm.querySelector('#email')
    var nameInput = registerForm.querySelector('#name')
    var passwordInput = registerForm.querySelector('#password')

    var email = emailInput.value 
    var name = nameInput.value
    var password = passwordInput.value

    var userRegistered = registerUser(name, email, password)

    if (!userRegistered){
        alert('User already exists')
    } 

    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

    registerView.style.display = 'none'
    loginView.style.display = 'block'
}


    

// login

var loginView = document.getElementById('login')
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

    var userAuthenticated = authenticateUser(email, password)

    if (!userAuthenticated) {
        alert('Wrong credentials')

        return

    } 
     
    emailInput.value = ''
    passwordInput.value = ''

    var homeTitle = homeView.querySelector('h1')

    var user = retrieverUser(email)
    
    homeTitle.innerText = 'Hello, ' + user.name + '!'
    
    loginView.style.display = 'none'
    homeView.style.display = 'block' 

}

// home

var homeView = document.getElementById('home')

homeView.style.display = 'none'

// TODO show user name logged in when entering in Home (Hello, >name<!)