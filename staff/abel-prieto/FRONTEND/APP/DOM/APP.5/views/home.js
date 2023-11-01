// HOME VIEW

var homeView = document.getElementById('home')

homeView.style.display = 'none'

// CREDENTIALS VIEW

var settingsView = document.getElementById('settings')
settingsView.style.display = 'none'

var checkEmailForm = settingsView.querySelector('#select-email')

checkEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmailInput = checkEmailForm.querySelector('#new_email')
    var confirmNewEmailInput = checkEmailForm.querySelector('#confirm-new-email')
    var passwordInput = checkEmailForm.querySelector('#password')
    
    var newEmail = newEmailInput.value
    var confirmNewEmail = confirmNewEmailInput.value
    var password = passwordInput.value

    try {
        changeUserEmail(loggedInEmail, newEmail, confirmNewEmail, password)

        loggedInEmail = newEmail

        alert('Email changed succesfully!')

        newEmailInput.value = ''
        confirmNewEmailInput.value = ''
        passwordInput.value = ''
    }

    catch (error) {
        alert(error.message)
    }
}

var changePasswordForm = settingsView.querySelector('#select-password')

changePasswordForm.onsubmit = function(event) {
    event.preventDefault()

    var passwordInput = changePasswordForm.querySelector('#current_password')
    var newPasswordInput = changePasswordForm.querySelector('#new_password')
    var againNewPasswordInput = changePasswordForm.querySelector('#again_new_password')

    var password = passwordInput.value
    var newPassword = newPasswordInput.value
    var againNewPassword = againNewPasswordInput.value

    try {
        changeUserPassword(loggedInEmail, password, newPassword, againNewPassword)
        
        alert('Password changed succesfully!')

        password.value = ''
        newPasswordInput.value = ''
        againNewPasswordInput.value = ''
    }

    catch (error) {
        alert(error.message)
    }
}

// BUTTON LOGOUT

var logoutButton = document.getElementById('home_button')

logoutButton.onclick = function (event) {
    event.preventDefault()
    
    registerView.style.display = 'none'
    homeView.style.display = 'none'
    logoutButton.style.display = 'none'
    loginView.style.display = 'block'
}

// BUTTON HOME

var homeButton = document.getElementById('back-home')
homeButton.style.display = 'none'

homeButton.addEventListener('click', function(event) { // Salir del apartado LOGIN
    event.preventDefault() 

    logoutButton.style.display = 'block'
    homeView.style.display = 'block'
    settingsLink.style.display = 'block'
    settingsView.style.display = 'none'
    homeButton.style.display = 'none'
})

// BUTTONS SETTINGS WITH <A>

var settingsLink = homeView.querySelector('#settings-link')

settingsLink.onclick = function(event) {
    event.preventDefault() 

    homeButton.style.display = 'block'
    homeView.style.display = 'block'
    logoutButton.style.display = 'block'
    settingsView.style.display = 'block'
    registerView.style.display = 'none'
    loginView.style.display = 'none'
}
