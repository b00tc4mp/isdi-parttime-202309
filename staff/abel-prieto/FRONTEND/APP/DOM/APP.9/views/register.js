// REGISTER

class RegisterView {
    constructor() {
        this.container = document.getElementById('register')

        this.container.style.display = 'none'

        this.registerLoginLink = this.container.querySelector('a')

        this.registerLoginLink.onclick = function (event) {
            event.preventDefault()

            this.registerForm.reset()

            this.container.style.display = 'none'
            loginView.container.style.display = ''
        }.bind(this)

        this.registerForm = this.container.querySelector('form')

        this.registerForm.onsubmit = function (event) {
            event.preventDefault()

            const nameInput = this.registerForm.querySelector('#name')
            const emailInput = this.registerForm.querySelector('#email')
            const passwordInput = this.registerForm.querySelector('#password')

            const name = nameInput.value
            const email = emailInput.value
            const password = passwordInput.value

            try {
                logic.registerUser(name, email, password)

                this.registerForm.reset()

                this.container.style.display = 'none'
                loginView.container.style.display = ''
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
    }
}