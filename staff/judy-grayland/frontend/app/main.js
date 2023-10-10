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

var emailLoggedIn = null
var password

loginForm.onsubmit = function (event) {
  event.preventDefault()
  var emailInput = loginForm.querySelector('#email')
  var passwordInput = loginForm.querySelector('#password')

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

// home
var homeView = document.getElementById('home')
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
  var newEmailInput = changeEmailForm.querySelector('#new-email')
  var newEmailConfirmInput = changeEmailForm.querySelector('#new-email-confirm')
  var passwordInput = changeEmailForm.querySelector('#password')

  var newEmail = newEmailInput.value
  var newEmailConfirm = newEmailConfirmInput.value
  var password = passwordInput.value

  try {
    changeUserEmail(emailLoggedIn, newEmail, newEmailConfirm, password)

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
  var newPasswordInput = changePasswordForm.querySelector('#new-password')
  var newPasswordConfirmInput = changePasswordForm.querySelector(
    '#new-password-confirm'
  )
  var passwordInput = changePasswordForm.querySelector('#password')

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
// var accountSettingsView = document.getElementById('accountSettings')
// accountSettingsView.style.display = 'none'

// var homeAccountSettingsLink = homeView.querySelector('a')
// homeAccountSettingsLink.onclick = function (event) {
//   event.preventDefault()
//   accountSettingsView.style.display = 'block'
// }

// //change email
// var changeEmailForm = document.getElementById('changeEmail')
// changeEmailForm.onsubmit = function (event) {
//   event.preventDefault()
//   var oldEmailInput = changeEmailForm.querySelector('#old-email')
//   var newEmailInput = changeEmailForm.querySelector('#new-email')
//   var newEmailConfirmInput = changeEmailForm.querySelector('#new-email-confirm')
//   var oldEmail = oldEmailInput.value
//   var newEmail = newEmailInput.value
//   var newEmailConfirm = newEmailConfirmInput.value

//   if (!checkOldEmail(oldEmail)) {
//     return
//   }

//   if (!compareNewEmails(newEmail, newEmailConfirm)) {
//     return
//   }
//   user = retrieveUser(email)
//   user.email = newEmail
//   console.log(user)

//   oldEmailInput.value = ''
//   newEmailInput.value = ''
//   newEmailConfirmInput.value = ''

//   alert('Email changed correctly')
//   homeView.style.display = 'none'
//   loginView.style.display = 'block'
// }

// function checkOldEmail(oldEmail) {
//   var loggedEmail = email
//   if (oldEmail !== loggedEmail) {
//     alert('the current email provided is incorrect')
//     return false
//   }
//   return true
// }
// function compareNewEmails(newEmail, newEmailConfirm) {
//   if (newEmail === newEmailConfirm) {
//     return true
//   }
//   alert('the two new emails do not match')
//   return false
// }

// //change password
// var changePasswordForm = document.getElementById('changePassword')
// changePasswordForm.onsubmit = function (event) {
//   event.preventDefault()
//   var oldPasswordInput = changePasswordForm.querySelector('#old-password')
//   var newPasswordInput = changePasswordForm.querySelector('#new-password')
//   var newPasswordConfirmInput = changePasswordForm.querySelector(
//     '#new-password-confirm'
//   )
//   var oldPassword = oldPasswordInput.value
//   var newPassword = newPasswordInput.value
//   var newPasswordConfirm = newPasswordConfirmInput.value

//   if (!checkOldPassword(oldPassword)) {
//     return
//   }

//   if (!compareNewPasswords(newPassword, newPasswordConfirm)) {
//     return
//   }
//   user = retrieveUser(email)
//   user.password = newPassword
//   console.log(user)

//   oldPassword = ''
//   newPassword = ''
//   newPasswordConfirm = ''

//   alert('Password changed correctly')
//   homeView.style.display = 'none'
//   loginView.style.display = 'block'
// }

// function checkOldPassword(oldPassword) {
//   var loggedPassword = password
//   if (oldPassword !== loggedPassword) {
//     alert('the current password provided is incorrect')
//     return false
//   }
//   return true
// }
// function compareNewPasswords(newPassword, newPasswordConfirm) {
//   if (newPassword === newPasswordConfirm) {
//     return true
//   }
//   alert('the two new passwords do not match')
//   return false
// }
