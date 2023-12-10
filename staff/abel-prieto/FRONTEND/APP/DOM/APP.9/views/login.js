// LOGIN VIEW

class LoginView {
    constructor() {
        this.container = document.getElementById('login')

        this.loginRegisterLink = this.container.querySelector('a')

        this.loginRegisterLink.onclick = function (event) {
            event.preventDefault()
        
            this.container.style.display = 'none'
            this.loginForm.reset()

            registerView.container.style.display = ''
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
    
                this.container.style.display = 'none'
    
                // render post
    
                homeView.renderPosts()
    
                // show home
                
                homeView.container.style.display = ''
                // postsView.style.display = ''
                // logoutButton.style.display = ''
                // profileLink.style.display = ''
                // profileView.style.display = 'none'
                // newPostView.style.display = 'none'
    
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
    }
}
