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

  try {
    registerUser(name, email, password)
    clearInputs(registerForm)
    showLogin()
  } catch (error) {
    throwError(error.message, registerForm)
  }
})
  
var loginForm = loginView.querySelector('form')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  var email = loginForm.querySelector('#email').value
  var password = loginForm.querySelector('#password').value

 try {
    userSession = userFound(email, password)
    welcomeUser(userSession)
    document.querySelector('.main').classList.add('hidden')
 } catch (error) {
    throwError(error.message, loginForm)
 }
})

var changeEmailForm = homeView.querySelector('.form-change-email')
changeEmailForm.addEventListener('submit', (e) => {
  e.preventDefault()

  var email = changeEmailForm.querySelector('#email').value

  try {
    var user = findUserByEmail(email)
    var newEmail = changeEmailForm.querySelector('#newEmail').value
    updateUserEmail(user, newEmail)
    sendMessage('Email updated.', homeView)
  } catch (error) {
      throwError(error.message, homeView)
  }
})

var changePassForm = homeView.querySelector('.form-change-password')
changePassForm.addEventListener('submit', (e) => {
  e.preventDefault()

  var password = homeView.querySelector('#password').value
   var newPassword = homeView.querySelector('#newPassword').value
  try {
    updatePassword(userSession, password, newPassword)
    sendMessage('Password updated.', homeView)
    homeView.querySelector('#password').value = ''
    homeView.querySelector('#newPassword').value = ''
  } catch (error) {
      throwError(error.message, homeView)
  }
})
