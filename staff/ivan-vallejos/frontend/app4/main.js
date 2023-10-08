var registerView = document.getElementById('register')

registerView.style.display = 'none'

var registerLoginLink = registerView.querySelector('a')

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = 'block'
}

var registerForm = registerView.querySelector(form)

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name')
    var emailInput = registerForm.querySelector('#email')
    var passwordInput = registerForm.querySelector('#password')

    var name = nameInput.value
    var email = email.value
    var password = password.value

    try{
        registerUser(name, email, password)

        nameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''

        registerView.style.display = 'none'
        loginView.style.display = 'block'
    } catch (error){
        alert(error.message)
    }
}

// Login

var loginView = document.getElementById ('login')
var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function(event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display ='block' 
}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email')
    var passwordInput= loginForm.querySelector('#password')

    var email = emailInput.value
    var password = passwordInput.value

    try{
        authenticateUSer(email, password)

        emailInput.value = ''
        passwordInput.value = ''

        var hometitle = homeView.querySelector('h1')  
          
        var user = retrieveUser (email)

        hometitle.innerText = 'Hello, ' + user.name + '!'

        loginView.style.display = 'none'
        homeView.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
}

//Home

var homeView = document.getElementById('home')

homeView.style.display = 'none'


