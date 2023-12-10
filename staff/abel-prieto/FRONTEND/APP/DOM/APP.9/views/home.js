// HOME VIEW

class HomeView {
    constructor() {
        this.container = document.getElementById('home')
        this.container.style.display = 'none'
        
        // HOME LINK
        this.homeLink = this.container.querySelector('#home-link')
        
        this.homeLink.onclick = function (event) {
            event.preventDefault()
        
            this.postsView.style.display = ''
            this.profileView.style.display = 'none'
            this.newPostView.style.display = 'none'
        }.bind(this)
        
        // PROFILE VIEW
        this.profileView = this.container.querySelector('#profile')
        this.profileView.style.display = 'none'
        
        // PROFILE LINK
        this.profileLink = this.container.querySelector('#profile-link')
        
        this.profileLink.onclick = function (event) {
            event.preventDefault()
        
            this.profileView.style.display = ''
            this.newPostView.style.display = 'none'
            this.postsView.style.display = 'none'
        }.bind(this)
        
        // POST VIEW
        this.postsView = this.container.querySelector('#post-view')
        
        // NEW POST VIEW
        this.newPostView = this.container.querySelector('#new-post-view')
        this.newPostView.style.display = 'none'
        
        // NEW POST BUTTON
        this.newPostButton = this.container.querySelector('#new-post-button')
        
        this.newPostButton.onclick = function (event) {
            event.preventDefault()
        
            this.newPostView.style.display = ''
            this.profileView.style.display = 'none'
            this.postsView.style.display = 'none'
        }.bind(this)
        
        // NEW POST FORM
        this.newPostForm = this.container.querySelector('#new-post-form')
        
        this.newPostForm.onsubmit = function(event) {
            event.preventDefault()
        
            const imageInput = this.container.querySelector('#image-input')
            const textInput = this.container.querySelector('#text-input')
        
            const image = imageInput.value
            const text = textInput.value
        
            try {
                logic.publishPost(image, text)
        
                this.newPostForm.reset()
            
                this.newPostView.style.display = 'none'
            
                // RENDERIZADO DE POST
            
                homeView.renderPosts()
            } catch(error) {
                alert(error.message)
            }
        }.bind(this)
        
        
        // CANCEL NEW POST BUTTON
        this.cancelNewPostButton = this.container.querySelector('#cancel-new-post')
        
        this.cancelNewPostButton.onclick = function (event) {
            event.preventDefault()
        
            this.newPostForm.reset()
        
            this.postsView.style.display = ''
            this.newPostView.style.display = 'none'
        }.bind(this)
        
        
        // CREDENTIALS VIEW - CHANGE EMAIL
        this.checkEmailForm = this.container.querySelector('#select-email')
        
        this.checkEmailForm.onsubmit = function (event) {
            event.preventDefault()
        
            const newEmailInput = this.container.querySelector('#new_email')
            const confirmNewEmailInput = this.container.querySelector('#confirm-new-email')
            const passwordInput = this.container.querySelector('#password')
        
            const newEmail = newEmailInput.value
            const confirmNewEmail = confirmNewEmailInput.value
            const password = passwordInput.value
        
            try {
                logic.changeUserEmail(newEmail, confirmNewEmail, password)
        
                alert('Email changed succesfully!')
        
                this.checkEmailForm.reset()
        
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
        
        // CREDENTIALS VIEW - CHANGE PASSWORD
        this.changePasswordForm = this.container.querySelector('#select-password')
        
        this.changePasswordForm.onsubmit = function(event) {
            event.preventDefault()
        
            const passwordInput = this.container.querySelector('#current_password')
            const newPasswordInput = this.container.querySelector('#new_password')
            const againNewPasswordInput = this.container.querySelector('#again_new_password')
        
            const password = passwordInput.value
            const newPassword = newPasswordInput.value
            const againNewPassword = againNewPasswordInput.value
        
            try {
                logic.changeUserPassword(password, newPassword, againNewPassword)
        
                alert('Password changed succesfully!')
        
                this.changePasswordForm.reset()
        
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
        
        // BUTTON LOGOUT
        this.logoutButton = this.container.querySelector('#logout-button')
        
        this.logoutButton.onclick = function (event) {
            event.preventDefault()
        
            this.container.style.display = 'none'
            loginView.container.style.display = ''
        
            logic.logoutUser()
        }.bind(this)
    }

    // Method RENDER POSTS
    renderPosts() {
        this.postsView.innerHTML = ''
    
        try {
            const posts = logic.retrievePosts()
    
            posts.toReversed().forEach(function (post) {
                const article = document.createElement('article')    
                article.setAttribute('class', 'post')   
        
                const h2 = document.createElement('h2')
                h2.innerText = post.author                         
        
                const img = document.createElement('img')
                img.setAttribute('class', 'post-img')
                img.src = post.image                               
        
                const p = document.createElement('p')
                p.innerText = post.text
        
                article.append(h2, img, p)                         
        
                this.postsView.append(article)
                
                this.postsView.style.display = ''
            }.bind(this))
            
        } catch(error) {
            alert(error.message)
        }
    }
}