

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