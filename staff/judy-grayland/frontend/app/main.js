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

  var nameInput = registerForm.querySelector('#name')
  var emailInput = registerForm.querySelector('#email')
  var passwordInput = registerForm.querySelector('#password')

  var name = nameInput.value
  var email = emailInput.value
  var password = passwordInput.value

  try {
    registerUser(name, email, password)
    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

    loginView.style.display = 'block'
    registerView.style.display = 'none'
  } catch (error) {
    alert(error.message)
  }
}

//login

var loginView = document.getElementById('login')

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
  event.preventDefault()

  registerView.style.display = 'block'
  loginView.style.display = 'none'
}

var loginForm = loginView.querySelector('form')

var email
var password

loginForm.onsubmit = function (event) {
  event.preventDefault()
  var emailInput = loginForm.querySelector('#email')
  var passwordInput = loginForm.querySelector('#password')

  email = emailInput.value
  password = passwordInput.value

  try {
    authenticateUser(email, password)

    emailInput.value = ''
    passwordInput.value = ''

    var homeTitle = homeView.querySelector('h1')

    var newUser = retrieveUser(email)

    homeTitle.innerText = 'Hello, ' + newUser.name + '!'

    loginView.style.display = 'none'
    homeView.style.display = 'block'
  } catch (error) {
    alert(error.message)
  }
}
var homeView = document.getElementById('home')
homeView.style.display = 'none'

var logoutBtn = document.getElementById('logout-btn')
logoutBtn.onclick = function (event) {
  event.preventDefault()
  homeView.style.display = 'none'
  loginView.style.display = 'block'
}

var accountSettingsView = document.getElementById('accountSettings')
accountSettingsView.style.display = 'none'

var homeAccountSettingsLink = homeView.querySelector('a')
homeAccountSettingsLink.onclick = function (event) {
  event.preventDefault()
  accountSettingsView.style.display = 'block'
}

var changeEmailForm = document.getElementById('changeEmail')
changeEmailForm.onsubmit = function (event) {
  event.preventDefault()
  var oldEmailInput = changeEmailForm.querySelector('#old-email')
  var newEmailInput = changeEmailForm.querySelector('#new-email')
  var newEmailConfirmInput = changeEmailForm.querySelector('#new-email-confirm')
  var oldEmail = oldEmailInput.value
  var newEmail = newEmailInput.value
  var newEmailConfirm = newEmailConfirmInput.value

  if (!checkOldEmail(oldEmail)) {
    return
  }

  if (!compareNewEmails(newEmail, newEmailConfirm)) {
    return
  }
  user = retrieveUser(email)
  user.email = newEmail
  console.log(user)

  oldEmail = ''
  newEmail = ''
  newEmailConfirm = ''

  alert('Email changed correctly')
  homeView.style.display = 'none'
  loginView.style.display = 'block'
}

function checkOldEmail(oldEmail) {
  var loggedEmail = email
  if (oldEmail !== loggedEmail) {
    alert('the current email provided is incorrect')
    return false
  }
  return true
}
function compareNewEmails(newEmail, newEmailConfirm) {
  if (newEmail === newEmailConfirm) {
    return true
  }
  alert('the two new emails do not match')
  return false
}
