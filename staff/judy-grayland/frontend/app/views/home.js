var homeView = document.getElementById('home-view')
homeView.style.display = 'none'

var logoutBtn = document.getElementById('logout-btn')

logoutBtn.onclick = function (event) {
  event.preventDefault()
  homeView.style.display = 'none'
  loginView.style.display = 'block'
}

// change Email
var changeEmailForm = homeView.querySelector('#change-email-form')

changeEmailForm.onsubmit = function (event) {
  event.preventDefault()
  var newEmailInput = changeEmailForm.querySelector('#new-email-input')
  var newEmailConfirmInput = changeEmailForm.querySelector(
    '#new-email-confirm-input'
  )
  var passwordInput = changeEmailForm.querySelector('#password-input')

  var newEmail = newEmailInput.value
  var newEmailConfirm = newEmailConfirmInput.value
  var password = passwordInput.value

  try {
    changeUserEmail(emailLoggedIn, newEmail, newEmailConfirm, password)

    emailLoggedIn = newEmail

    alert('email changed correctly')
    newEmailInput.value = ''
    newEmailConfirmInput.value = ''
    passwordInput.value = ''
  } catch (error) {
    alert(error.message)
  }
}

//change Password

var changePasswordForm = homeView.querySelector('#change-password-form')

changePasswordForm.onsubmit = function (event) {
  event.preventDefault()
  var newPasswordInput = changePasswordForm.querySelector('#new-password-input')
  var newPasswordConfirmInput = changePasswordForm.querySelector(
    '#new-password-confirm-input'
  )
  var passwordInput = changePasswordForm.querySelector('#password-input')

  var newPassword = newPasswordInput.value
  var newPasswordConfirm = newPasswordConfirmInput.value
  var password = passwordInput.value

  try {
    changeUserPassword(emailLoggedIn, newPassword, newPasswordConfirm, password)

    alert('password changed correctly')
    newPasswordInput.value = ''
    newPasswordConfirmInput.value = ''
    passwordInput.value = ''
  } catch (error) {
    alert(error.message)
  }
}
