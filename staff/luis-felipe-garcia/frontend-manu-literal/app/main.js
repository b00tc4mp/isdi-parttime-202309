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

        registerView.style.display = 'none'
        loginView.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
}

// login

var loginView = document.getElementById('login')
var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = 'block'
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

        loginView.style.display = 'none'
        homeView.style.display = 'block'
        changeMailForm.style.display = 'none'
        changePasswordForm.style.display = 'none'


        changeViewStatus('none', loginView, changeMailForm, changePasswordForm)
        changeViewStatus('block', homeView)

    } catch (error) {
        alert(error.message)
    }
    
}

// home

var homeView = document.getElementById('home')

homeView.style.display = 'none'

// Logout 

logoutLink = homeView.querySelector('#logout-link')
logoutLink.onclick = function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    loginView.style.display = 'block'
    user = ''
}


// Change mail

changeEmailLink = homeView.querySelector('#change-email-link')
changeEmailLink.onclick = function(event){
    event.preventDefault()
    changeViewStatus('block', changeMailForm)
    changeViewStatus('none', changePasswordForm, homeView.querySelector('nav'))
//    changeMailForm.style.display = 'block'
  //  changePasswordForm.style.display = 'none'
    //homeView.querySelector('nav').style.display = 'none'
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

        homeView.style.display = 'block'
        changeMailForm.style.display = 'none'
        homeView.querySelector('nav').style.display = 'block'
        
        alert ('Mail updated')
//        }
    } catch (error) {
        alert(error.message)
    }
}

// Change password

changePasswordLink = homeView.querySelector('#change-password-link')
changePasswordLink.onclick = function(event){
    event.preventDefault()
    changePasswordForm.style.display = 'block'
    changeMailForm.style.display = 'none'
    homeView.querySelector('nav').style.display = 'none'
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

        homeView.style.display = 'block'
        changePasswordForm.style.display = 'none'
        homeView.querySelector('nav').style.display = 'block'
        alert ('Password updated')
       
    } catch (error) {
        alert(error.message)
        
    }
}

var switchOnOffViews = function(viewToSwitchOn, viewToSwitchOff1, viewToSwitchOff2) {
    viewToSwitchOn.style.display = 'block';
    viewToSwitchOff1.style.display = 'none';
    viewToSwitchOff2.style.display = 'none';
    }

var resetToHomeView = function(viewToSwitchOn, viewToSwitchOff){

    viewToSwitchOn.style.display = 'block';
    viewToSwitchOff.style.display = 'none'
    homeView.querySelector('nav').style.display = 'block'
}

var switchOnOffViews = function(viewToSwitchOn) {
    viewToSwitchOn.style.display = 'block';
    }

var changeViewStatus = function (displayStatus,...views) {
    for (view of views) {
        view.style.display = displayStatus
    }
}