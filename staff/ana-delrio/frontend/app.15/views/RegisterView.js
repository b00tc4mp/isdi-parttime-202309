class RegisterView extends Component {
    constructor() {
        super(document.getElementById('register-view'))

        // añadimos el método que pusimos en component
        // cuando arranca que se muestra apagado
        this.hide()

        this.registerLoginLink = this.container.querySelector('a')

        this.registerLoginLink.onclick = function (event) {
            event.preventDefault()

            // añadimos el método que pusimos en component
            this.hide()
            this.registerForm.reset()

            // añadimos el método que pusimos en component
            loginView.show()
        }.bind(this)

        this.registerForm = this.container.querySelector('form')

        this.registerForm.onsubmit = function (event) {
            event.preventDefault()

            const nameInput = this.registerForm.querySelector('#name-input')
            const emailInput = this.registerForm.querySelector('#email-input')
            const passwordInput = this.registerForm.querySelector('#password-input')

            const name = nameInput.value
            const email = emailInput.value
            const password = passwordInput.value

            try {
                logic.registerUser(name, email, password)

                this.registerForm.reset()

                // añadimos el método que pusimos en component
                this.hide()
                // añadimos el método que pusimos en component
                loginView.show()
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
    }
}