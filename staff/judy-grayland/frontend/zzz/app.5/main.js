var emailLoggedIn = null

// home

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
