// HOME VIEW

var homeView = document.getElementById('home')

homeView.style.display = 'none'

// CREDENTIALS VIEW

var checkEmailForm = homeView.querySelector('#select-email')

checkEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmailInput = checkEmailForm.querySelector('#new_email')
    var confirmNewEmailInput = checkEmailForm.querySelector('#confirm-new-email')
    var passwordInput = checkEmailForm.querySelector('#password')
    
    var newEmail = newEmailInput.value
    var confirmNewEmail = confirmNewEmailInput.value
    var password = passwordInput.value

    try {
        changeUserEmail(emailLoggedIn, newEmail, confirmNewEmail, password)

        emailLoggedIn = newEmail

        alert('Email changed succesfully!')

        newEmailInput = ''
        confirmNewEmailInput = ''
        passwordInput = ''
    }

    catch (error) {
        alert(error.message)
    }
}

var changePasswordForm = homeView.querySelector('#select-password')

changePasswordForm.onsubmit = function(event) {
    event.preventDefault()

    var passwordInput = changePasswordForm.querySelector('#current_password')
    var newPasswordInput = changePasswordForm.querySelector('#new_password')
    var againNewPasswordInput = changePasswordForm.querySelector('#again_new_password')

    var password = passwordInput.value
    var newPassword = newPasswordInput.value
    var againNewPassword = againNewPasswordInput.value

    try {
        changeUserPassword(emailLoggedIn, password, newPassword, againNewPassword)
        
        alert('Password changed succesfully!')

        var password = ''
        var newPasswordInput = ''
        var againNewPasswordInput = ''
    }

    catch {
        alert(error.message)
    }
}

// BUTTON LOGOUT

var homeButton = document.getElementById('home_button')

homeButton.onclick = function (event) {
    event.preventDefault()
    
    registerView.style.display = 'none'
    homeView.style.display = 'none'
    homeButton.style.display = 'none'
    loginView.style.display = 'block'
}

