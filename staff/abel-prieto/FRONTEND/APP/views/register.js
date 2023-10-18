// REGISTER

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
        loginView.style.display = ''
    } catch (error) {
        alert(error.message)
    }
}