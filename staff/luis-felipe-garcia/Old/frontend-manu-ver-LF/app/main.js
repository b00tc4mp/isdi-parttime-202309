var registerView = document.getElementById('register')
changeViewStatus('none', registerView)

var registerLoginLink = registerView.querySelector('a')

registerLoginLink.onclick = function (event) {
    event.preventDefault()
    changeViewStatus('none', registerView)
    changeViewStatus('block', loginView)
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

        changeViewStatus('none', registerView)
        changeViewStatus('block', loginView)
    } catch (error) {
        alert(error.message)
    }
}

// login

var loginView = document.getElementById('login')
var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()
    changeViewStatus('none', loginView)
    changeViewStatus('block', registerView)
}

var loginForm = loginView.querySelector('form')
var user
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

        user = retrieveUser(email)

        homeTitle.innerText = 'Hello, ' + user.name + '!'
        changeViewStatus('none', loginView, changeMailForm, changePasswordForm)
        changeViewStatus('block', homeView)

    } catch (error) {
        alert(error.message)
    }
    
}

// home

var homeView = document.getElementById('home')
changeViewStatus('none', homeView)
    

// Logout 

logoutLink = homeView.querySelector('#logout-link')
logoutLink.onclick = function (event) {
    event.preventDefault()
    changeViewStatus('none', homeView)
    changeViewStatus('block', loginView)
    user = ''
}


// Change mail

changeEmailLink = homeView.querySelector('#change-email-link')
changeEmailLink.onclick = function(event){
    event.preventDefault()
    changeViewStatus('block', changeMailForm)
    changeViewStatus('none', changePasswordForm, homeView.querySelector('nav'))
}

var changeMailForm = homeView.querySelector('#change-email-form')
changeMailForm.onsubmit = function(event) {
    event.preventDefault()
    
    var newMail = changeMailForm.querySelector('#new-email').value
    var checkedNewMail = changeMailForm.querySelector('#checked-new-email').value

    try {      
        checkCoincidence(newMail, checkedNewMail, 'Mail')
        checkElementsChanges(user.email, newMail, `New mail is the same as current`)
        changeMailForm.reset()
        user.email = newMail
        changeViewStatus('none', changeMailForm)
        changeViewStatus('block', loginView, homeView.querySelector('nav'))
        alert ('Mail updated')

    } catch (error) {
        alert(error.message)
    }
}

// Change password

changePasswordLink = homeView.querySelector('#change-password-link')
changePasswordLink.onclick = function(event){
    event.preventDefault()
    changeViewStatus('none', homeView, changeMailForm)
    changeViewStatus('block', changePasswordForm)
}

var changePasswordForm = homeView.querySelector('#change-password-form')
changePasswordForm.onsubmit = function (event) {
    event.preventDefault()

    var currentPassword = changePasswordForm.querySelector('#current-password').value
    var newPassword = changePasswordForm.querySelector('#new-password').value
    var checkedNewPassword = changePasswordForm.querySelector('#checked-new-password').value

    try {
        validateCurrentPassword(currentPassword)
        checkCoincidence(newPassword, checkedNewPassword, 'Passwords')
        checkElementsChanges(user.password, newPassword, `New password is the seame as current`)
        changePasswordForm.reset()
        user.password = newPassword
        changeViewStatus('none', changePasswordForm)
        changeViewStatus('block', homeViewView, homeView.querySelector('nav'))
        alert ('Password updated')
       
    } catch (error) {
        alert(error.message)
        
    }
}


var changeViewStatus = function (displayStatus,...views) {
    for (view of views) {
        view.style.display = displayStatus
    }
}