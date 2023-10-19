// LOGIN VIEW

loginView = document.getElementById('login')
loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginForm.reset()
    loginView.style.display = 'none'
    registerView.style.display = ''
}

loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email')
    var passwordInput = loginForm.querySelector('#password')

    var email = emailInput.value
    var password = passwordInput.value

    try {
        authenticateUser(email, password)

        loginForm.reset()

        var user = retrieveUser(email)

        profileLink.innerText = user.name 

        loggedInEmail = email

        loginView.style.display = 'none'

        // render post

        renderPosts()

        // show home
        
        homeView.style.display = ''
        postsView.style.display = ''
        logoutButton.style.display = ''
        profileLink.style.display = ''
        profileView.style.display = 'none'
        newPostView.style.display = 'none'

    } catch (error) {
        alert(error.message)
    }
}