class LoginView {
    // creamos el contenedor para buscar ese id que necesita la loginvIEW
    constructor(containerId) {
        this.container = document.getElementById(containerId)

        this.loginRegisterLink = this.container.querySelector('a')

        this.loginRegisterLink.onclick = function (event) {
            event.preventDefault()

            this.container.style.display = 'none'
            this.loginForm.reset()

            registerView.style.display = ''
        }.bind(this)

        this.loginForm = this.container.querySelector('form')

        this.loginForm.onsubmit = function (event) {
            event.preventDefault()

            const emailInput = this.loginForm.querySelector('#email-input')
            const passwordInput = this.loginForm.querySelector('#password-input')

            const email = emailInput.value
            const password = passwordInput.value

            try {
                // lo vinculamos a la clase logic que hemos creado
                logic.loginUser(email, password)

                this.loginForm.reset()

                // le pediré a la lógica que me de el usuario
                const user = logic.retrieveUser()

                profileLink.innerText = user.name

                this.container.style.display = 'none'

                // render posts in home

                renderPosts()

                // show home

                homeView.style.display = ''
            } catch (error) {
                alert(error.message)
            }
            // ponemos esto para que el this de dentro apunte al primer this
        }.bind(this)
    }
}