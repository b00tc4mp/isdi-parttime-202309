var registerView = document.getElementById('register')
registerView.style.display = 'none'
var loginView = document.getElementById('login')
var homeView = document.getElementById('home')
homeView.style.display = 'none'

var registerLink = document.querySelector('#login > a')
var loginLink = document.querySelector('#register > a')

homeView.querySelector('.svg').onclick = function () {
  homeView.querySelector('nav').classList.toggle('hidden')
}

homeView.querySelector('.change-email-btn').onclick = function () {
  homeView.querySelector('.form-change-email').classList.toggle('hidden')
  homeView.querySelector('.form-change-password').classList.add('hidden')
}
homeView.querySelector('.change-pass-btn').onclick = function () {
  homeView.querySelector('.form-change-password').classList.toggle('hidden')
  homeView.querySelector('.form-change-email').classList.add('hidden')
}

homeView.querySelector('.sign-out').onclick = function () {
  homeView.style.display = 'none'
  loginView.style.display = 'block'
  document.querySelector('.main').classList.remove('hidden')
}

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

function welcomeUser(user) {
  homeView.querySelector('h1').innerText = 'Bienvenido ' + user.name
  loginView.style.display = 'none'
  registerView.style.display = 'none'
  homeView.style.display = 'block'
  loginView.querySelector('#email').value = ''
  loginView.querySelector('#password').value = ''
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

  userSession = userFound(email, password)
  welcomeUser(userFound(email, password))

  document.querySelector('.main').classList.add('hidden')
})

var changeEmailForm = homeView.querySelector('.form-change-email')
changeEmailForm.addEventListener('submit', (e) => {
  e.preventDefault()

  var email = changeEmailForm.querySelector('#email').value
  var user = findUserByEmail(email)

  if (!user) {
    return throwError('Email not found.', homeView)
  }

  var newEmail = changeEmailForm.querySelector('#newEmail').value

  updateUserEmail(user, newEmail)
  sendMessage('Email updated.', homeView)
})

var changePassForm = homeView.querySelector('.form-change-password')
changePassForm.addEventListener('submit', (e) => {
  e.preventDefault()

  var password = homeView.querySelector('#password').value

  if (!checkPassword(userSession.password, password)) {
    return throwError('Error password.', homeView)
  }

  var newPassword = homeView.querySelector('#newPassword').value

  updatePassword(userSession, newPassword)
  sendMessage('Password updated.', homeView)
})
