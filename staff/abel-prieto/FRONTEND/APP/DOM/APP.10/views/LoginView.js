// LOGIN VIEW

class LoginView extends Component{
    constructor() {
        super(document.getElementById('login')) // Contructor "Component" => this.container

        this.loginRegisterLink = this.container.querySelector('a')

        this.loginRegisterLink.onclick = function (event) {
            event.preventDefault()
        
            this.hide() // No metemos el "container"
            this.loginForm.reset()

            registerView.show()
        }.bind(this)

        this.loginForm = this.container.querySelector('form')

        this.loginForm.onsubmit = function (event) {
            event.preventDefault()
    
            const emailInput = this.container.querySelector('#email')
            const passwordInput = this.container.querySelector('#password')
    
            const email = emailInput.value
            const password = passwordInput.value
    
            try {
                logic.loginUser(email, password)
    
                this.loginForm.reset()
    
                const user = logic.retrieveUser()
    
                homeView.profileLink.innerText = user.name 
    
                this.hide()
    
                // render post
    
                homeView.postsView.renderPosts()
    
                // show home
                
                homeView.show()
    
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
    }
}
