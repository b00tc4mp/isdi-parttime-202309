
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

function sendMessage(msg, view) {
  var errorExist = document.querySelector('.error')

  if (errorExist) {
    errorExist.remove('')
  }

  var errorUserExist = document.createElement('p')
  errorUserExist.classList.add('success')
  errorUserExist.innerText = msg
  view.append(errorUserExist)
}

function clearInputs(view) {
  view.querySelector('#name').value = ''
  view.querySelector('#email').value = ''
  view.querySelector('#password').value = ''
}