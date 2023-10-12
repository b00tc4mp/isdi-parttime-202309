var homeView = document.getElementById('home-view')

homeView.style.display = 'none'

var privacySettings = document.getElementById('home-view')
var privacySettingsButton = privacySettings.querySelector('a')

privacySettingsButton.onclick = function (event) {
    event.preventDefault()

    privacySettingsButton.style.display = "none"
    changeEmailForm = homeView.querySelector('#change-email-form')
    changeEmailForm.style.display = 'block'
    var changePasswordForm = homeView.querySelector('#change-password-form')
    changePasswordForm.style.display = 'block'
    goHome.style.display = 'block'
}
//////////////////////////////////////////////////////////
var goHome = document.querySelector('.goHome')

goHome.onclick = function (event) {
    event.preventDefault()
    goHome.style.display = 'none'
    privacySettingsButton.style.display = "block"
    changeEmailForm = homeView.querySelector('#change-email-form')
    changeEmailForm.style.display = 'none'
    var changePasswordForm = homeView.querySelector('#change-password-form')
    changePasswordForm.style.display = 'none'

}
//////////////////////////////////////////////////////////

var logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
    homeView.style.display = 'none'
    loginView.style.display = 'block'
}

var changeEmailForm = homeView.querySelector('#change-email-form')

changeEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmailInput = changeEmailForm.querySelector('#new-email-input')
    var newEmailConfirmInput = changeEmailForm.querySelector('#new-email-confirm-input')
    var passwordInput = changeEmailForm.querySelector('#password-input')

    var newEmail = newEmailInput.value
    var newEmailConfirm = newEmailConfirmInput.value
    var password = passwordInput.value

    try {
        changeUserEmail(emailLoggedIn, newEmail, newEmailConfirm, password)

        emailLoggedIn = newEmail

        alert('E-mail changed')

        newEmailInput.value = ''
        newEmailConfirmInput.value = ''
        passwordInput.value = ''
    } catch (error) {
        alert(error.message)
    }
}

var changePasswordForm = homeView.querySelector('#change-password-form')

changePasswordForm.onsubmit = function (event) {
    event.preventDefault()

    var passwordInput = changePasswordForm.querySelector('#password-input')
    var newPasswordInput = changePasswordForm.querySelector('#new-password-input')
    var newPasswordConfirmInput = changePasswordForm.querySelector('#new-password-confirm-input')

    var password = passwordInput.value
    var newPassword = newPasswordInput.value
    var newPasswordConfirm = newPasswordConfirmInput.value

    try {
        changeUserPassword(emailLoggedIn, newPassword, newPasswordConfirm, password)

        alert('Password changed')

        passwordInput.value = ''
        newPasswordInput.value = ''
        newPasswordConfirmInput.value = ''
    } catch (error) {
        alert(error.message)
    }
}