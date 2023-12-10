// REGISTER

class RegisterView extends Component{
    constructor() {
        super(document.getElementById('register')) // Contructor "Component" => this.container

        this.hide()

        this.registerLoginLink = this.container.querySelector('a')

        this.registerLoginLink.onclick = function (event) {
            event.preventDefault()

            this.registerForm.reset()

            this.hide()
            loginView.show()
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

                this.hide()
                loginView.show()
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
    }
}