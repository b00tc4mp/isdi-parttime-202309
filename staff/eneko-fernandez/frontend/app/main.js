var registerView = document.getElementById('register')
registerView.style.display = 'none'
var loginView = document.getElementById('login')
var homeView = document.getElementById('home')
homeView.style.display = 'none'

var registerLink = document.querySelector('#login > a')
var loginLink = document.querySelector('#register > a')

registerLink.addEventListener('click', (e) => {
  e.preventDefault()
  loginView.style.display = 'none'
  registerView.style.display = 'block'
})

loginLink.addEventListener('click', (e) => {
  e.preventDefault()
  loginView.style.display = 'block'
  registerView.style.display = 'none'
})

function showLogin() {
  loginView.style.display = 'block'
  registerView.style.display = 'none'
}

function showRegister() {
  loginView.style.display = 'none'
  registerView.style.display = 'block'
}
function throwError(msg, view) {
  var errorExist = document.querySelector('.error')

  if (errorExist) {
    errorExist.remove('')
  }

  var errorUserExist = document.createElement('p')
  errorUserExist.classList.add('error')
  errorUserExist.innerText = msg
  view.append(errorUserExist)
}

function clearInputs(view) {
  view.querySelector('#name').value = ''
  view.querySelector('#email').value = ''
  view.querySelector('#password').value = ''
}

function welcomeUser(user) {
  homeView.querySelector('h1').innerText = 'Bienvenido ' + user.name
  loginView.style.display = 'none'
  registerView.style.display = 'none'
  homeView.style.display = 'block'
}

var registerForm = registerView.querySelector('form')
registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  var name = registerForm.querySelector('#name').value
  var email = registerForm.querySelector('#email').value
  var password = registerForm.querySelector('#password').value

  if (checkValidEmail(email))
    return throwError('Todos los campos son obigatorios.', registerForm)

  if (existUser(email))
    return throwError('El email ya está en uso', registerForm)

  registerUser(name, email, password)

  clearInputs(registerForm)

  showLogin()
})

var loginForm = loginView.querySelector('form')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  var email = loginForm.querySelector('#email').value
  var password = loginForm.querySelector('#password').value

  if (checkValidEmail(email))
    return throwError('Todos los campos son obigatorios.', loginForm)

  if (!existUser(email)) return throwError('El email no existe', loginForm)

  if (!userFound(email, password))
    return throwError('Contraseña incorrecta', loginForm)

  welcomeUser(userFound(email, password))
})
