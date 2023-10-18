var loginView = document.getElementById('login-view')

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
  event.preventDefault()

  registerView.style.display = 'block'
  loginView.style.display = 'none'
}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
  event.preventDefault()
  var emailInput = loginForm.querySelector('#email-input')
  var passwordInput = loginForm.querySelector('#password-input')

  var email = emailInput.value
  var password = passwordInput.value

  try {
    authenticateUser(email, password)

    emailInput.value = ''
    passwordInput.value = ''

    var homeTitle = homeView.querySelector('h1')

    var newUser = retrieveUser(email)

    homeTitle.innerText = 'Hello, ' + newUser.name + '!'

    emailLoggedIn = email

    loginView.style.display = 'none'
    homeView.style.display = 'block'
  } catch (error) {
    alert(error.message)
  }
}
