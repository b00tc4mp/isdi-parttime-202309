// STORAGE

var users = []
 

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
    
    var emailInput = registerForm.querySelector('#email')
    var email = emailInput.value

    var userFound = false

    for (i = 0; i < users.length && !userFound; i++) {
        var user = users[i]

        if (user.email === email) 
            userFound = true
    }

    if (userFound) {
        alert('User already exist')

        return
    }
    
    var nameInput = registerForm.querySelector('#username')
    var passwordInput = registerForm.querySelector('#password')

    var username = nameInput.value
    var password = passwordInput.value
    
    var user = {}

    users.push(user)
    
    user.username = username
    user.email = email
    user.password = password

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    registerView.style.display = 'none';
    loginView.style.display = 'block';
}


// LOGIN


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
    var email = emailInput.value 

    var foundUser = null

    for (i = 0; i < users.length && !foundUser; i++) {
        var user = users[i]

        if (user.email === email) 
            foundUser = user
        
    }

    if (!foundUser) {
        alert('User not found')

        return
    }   

    var passwordInput = loginForm.querySelector('#password')
    var password = passwordInput.value

    if (foundUser.password !== password) {
        alert('Wrong credentials')

        return
    }

    emailInput.value = ''
    passwordInput.value = ''

    var homeTittle = homeView.querySelector('h1')

    homeTittle.innerText = 'Hello ' + foundUser.username + '!'

    loginView.style.display = 'none'
    homeView.style.display = 'block'
}

// HOME


var homeView = document.getElementById('home')
homeView.style.display = 'none'

