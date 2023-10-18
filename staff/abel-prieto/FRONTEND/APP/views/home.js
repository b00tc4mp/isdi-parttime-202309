// HOME VIEW

var homeView = document.getElementById('home')
homeView.style.display = 'none'


// HOME LINK

var homeLink = homeView.querySelector('#home-link')

homeLink.onclick = function (event) {
    event.preventDefault()

    profileView.style.display = 'none'
}





// PROFILE VIEW

var profileView = homeView.querySelector('#profile')
profileView.style.display = 'none'


// PROFILE LINK

var profileLink = homeView.querySelector('#profile-link')

profileLink.onclick = function (event) {
    event.preventDefault()

    profileView.style.display = ''
}


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

        newEmailInput.value = ''
        confirmNewEmailInput.value = ''
        passwordInput.value = ''
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

        passwordInput.value = ''
        newPasswordInput.value = ''
        againNewPasswordInput.value = ''
    }

    catch (error) {
        alert(error.message)
    }
}


// BUTTON LOGOUT

var logoutButton = document.getElementById('logout-button')

logoutButton.onclick = function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    loginView.style.display = ''
}
