class LoginView extends Component {
    constructor() {
        // Llama al constructor de la clase padre (Component) pasando el elemento con el ID 'login-view'
        super(document.getElementById('login-view'))

        // Encuentra el enlace dentro del elemento 'container' y lo almacena en 'loginRegisterLink'
        this.loginRegisterLink = this.container.querySelector('a')

        this.loginRegisterLink.onclick = function (event) {
            event.preventDefault()

            this.hide()
            this.loginForm.reset()

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

                this.hide()

                // render posts in home

                homeView.postsView.renderPosts()

                // show home

                homeView.show()
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
    }
}