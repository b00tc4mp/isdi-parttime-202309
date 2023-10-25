

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