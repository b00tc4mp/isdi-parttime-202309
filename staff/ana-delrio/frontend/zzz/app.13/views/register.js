registerView = document.getElementById('register-view')

registerView.style.display = 'none'

registerLoginLink = registerView.querySelector('a')

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    registerForm.reset()

    // lo vinculamos con el container que hemos creado
    loginView.container.style.display = ''
}

registerForm = registerView.querySelector('form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name-input')
    var emailInput = registerForm.querySelector('#email-input')
    var passwordInput = registerForm.querySelector('#password-input')

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    try {
        //  lo vinculamos a la clase logic que hemos creado
        logic.registerUser(name, email, password)

        registerForm.reset()

        registerView.style.display = 'none'
        // lo vinculamos con el container que hemos creado
        loginView.container.style.display = ''
    } catch (error) {
        alert(error.message)
    }
}