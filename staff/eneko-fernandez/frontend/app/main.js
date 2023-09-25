var users = []

var registerView = document.getElementById("register")
registerView.style.display = 'none'
var loginView = document.getElementById('login')
var homeView = document.getElementById('home')
homeView.style.display = 'none'


var registerLink =  document.querySelector('#login > a')
var loginLink =  document.querySelector('#register > a')

registerLink.addEventListener("click", e => {
    e.preventDefault()
    loginView.style.display = "none"
    registerView.style.display = 'block'
})

loginLink.addEventListener("click", e => {
    e.preventDefault()
    loginView.style.display = "block"
    registerView.style.display = 'none'
})

var registerForm = registerView.querySelector('form')
registerForm.addEventListener("submit", e => {
    e.preventDefault()
    var name = registerForm.querySelector('#name').value
    var email = registerForm.querySelector('#email').value
    var password = registerForm.querySelector('#password').value
    var user = {name, email, password}

    if(Object.values(user).some(val => val === '' )) return 
    
    if(users.some(user => user.email === email)) {
       var errorUserExist = document.createElement("p")
       errorUserExist.innerText = "El email ya está en uso"
       registerView.append(errorUserExist)
       return
    }
    users.push(user)

    registerForm.querySelector('#name').value = ''
    registerForm.querySelector('#email').value = ''
    registerForm.querySelector('#password').value = ''
    
    loginView.style.display = "block"
    registerView.style.display = 'none'
    
})

var loginForm = loginView.querySelector('form')
loginForm.addEventListener("submit", e => {
    e.preventDefault()
   
    var email = loginForm.querySelector('#email').value
    var password = loginForm.querySelector('#password').value

    if(!users.some(user => user.email === email)) {
        var errorUserNotExist = document.createElement("p")
        errorUserNotExist.innerText = "El usuario no existe"
        loginView.append(errorUserNotExist)
        return
    }
    
    users.forEach(user => {
        if(user.email === email && user.password === password) {
            homeView.querySelector("h1").innerText = "Bienvenido " + user.name 
            loginForm.querySelector('#email').value = ''
            loginForm.querySelector('#password').value = ''
            loginView.style.display = "none"
            registerView.style.display = 'none'
            homeView.style.display = 'block'
        } else {
            var errorUserNotMatch = document.createElement("p")
            errorUserNotMatch.innerText = "Contraseña incorrecta"
            loginView.append(errorUserNotMatch)
        }
    })

    
})

