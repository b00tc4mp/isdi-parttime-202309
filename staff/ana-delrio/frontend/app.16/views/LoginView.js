class LoginView extends Component {
    constructor() {
        super(document.getElementById('login-view'))

        this.loginRegisterLink = this.container.querySelector('a')

        this.loginRegisterLink.onclick = function (event) {
            event.preventDefault()

            // añadimos el método que pusimos en component
            this.hide()
            this.loginForm.reset()

            // añadimos el método que pusimos en component
            registerView.show()
        }.bind(this)

        this.loginForm = this.container.querySelector('form')

        this.loginForm.onsubmit = function (event) {
            event.preventDefault()

            const emailInput = this.loginForm.querySelector('#email-input')
            const passwordInput = this.loginForm.querySelector('#password-input')

            const email = emailInput.value
            const password = passwordInput.value

            try {
                logic.loginUser(email, password)

                this.loginForm.reset()

                const user = logic.retrieveUser()

                homeView.profileLink.innerText = user.name

                // añadimos el método que pusimos en component
                this.hide()

                // render posts in home

                homeView.renderPosts()

                // show home

                // añadimos el método que pusimos en component
                homeView.show()
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
    }
}