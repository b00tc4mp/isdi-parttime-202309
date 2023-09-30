// function wich change active view
var switchOnOffViews = function(viewToSwitchOn, viewToSwitchOff1, viewToSwitchOff2) {
    viewToSwitchOn.style.display = 'block';
    viewToSwitchOff1.style.display = 'none';
    viewToSwitchOff2.style.display = 'none';
    }

// defining views to use in code
var loginView = document.getElementById('login')
var loginRegisterLink = loginView.querySelector('a')
var loginForm = loginView.querySelector('form')

var homeView = document.getElementById('home')
var homeTitle = homeView.querySelector('h1')

var registerView = document.getElementById('register')
var registerLoginLink = registerView.querySelector('a')
var registerForm = registerView.querySelector('form')

// switching on landing page view
switchOnOffViews(loginView, registerView, homeView)

// *** login workflow ***
loginRegisterLink.onclick = function (event) {
    event.preventDefault()
    switchOnOffViews(registerView, loginView, homeView)
}

loginForm.onsubmit = function (event) {
    event.preventDefault()
    var [emailInput, passwordInput] = registerForm.querySelectorAll('#name, #email, #password')
    var [email, password] = [nameInput, emailInput, passwordInput].map(element => element.value)
  
    var userAuthenticated = autenticateUser(email, password)

}


loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email')
    var email = emailInput.value
    var foundUser = checkAndGetUser(email)

    if (!foundUser) {
        alert('Wrong credentials')
        return
    }

    var passwordInput = loginForm.querySelector('#password')
    var password = passwordInput.value

    if (foundUser.password !== password) {
        alert('Wrong credentials')
        return
    }

    // Reseting form values 
    emailInput.value = ''
    passwordInput.value = ''

    // switching on home view
    homeTitle.innerText = 'Hello, ' + foundUser.name + '!'
    switchOnOffViews(homeView, loginView, registerView)
}


// ***register workflow***
registerLoginLink.onclick = function (event) {
    event.preventDefault()
    switchOnOffViews(loginView, registerView, homeView)
}

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var [nameInput, emailInput, passwordInput] = registerForm.querySelectorAll('#name, #email, #password')
    var [name, email, password] = [nameInput, emailInput, passwordInput].map(element => element.value)
    var userRegistered = registerUser(name, email, password)

    if (!userRegistered) {
        alert('User already exists')
        return
    }

    // Reseting form values and switching on view
    [nameInput.value, emailInput.value, passwordInput.value] = ['','','']
    switchOnOffViews(loginView, registerView, homeView)
}










/*    
    var nameInput = registerForm.querySelector('#name')
    var emailInput = registerForm.querySelector('#email')
    var passwordInput = registerForm.querySelector('#password')
    
    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value
*/

/*
    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''
*/