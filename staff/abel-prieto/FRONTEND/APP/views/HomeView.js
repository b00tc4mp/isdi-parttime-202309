// HOME VIEW

class HomeView extends Component{
    constructor() {
        super(document.getElementById('home')) // Contructor "Component" => this.container

        this.hide()
        
        // HOME LINK
        this.homeLink = this.container.querySelector('#home-link')
        
        this.homeLink.onclick = function (event) {
            event.preventDefault()
        
            this.postsView.show()
            this.profileView.hide()
            this.newPostView.hide()
        }.bind(this)

        // BUTTON LOGOUT
        this.logoutButton = this.container.querySelector('#logout-button')
        
        this.logoutButton.onclick = function (event) {
            event.preventDefault()
        
            this.hide()
            loginView.show()
        
            logic.logoutUser()
        }.bind(this)

        // PROFILE VIEW
        this.profileView = new ProfileView // Llamamos a la clase PorfileView

        this.profileView.hide() 
        // No podemos poner "ProfileView.hide()" porque "HomeView", hasta que no termine de cargar el constructor, no define HOME.
        
        // PROFILE LINK
        this.profileLink = this.container.querySelector('#profile-link')
        
        this.profileLink.onclick = function (event) {
            event.preventDefault()
        
            this.profileView.show()
            this.newPostView.hide()
            this.postsView.hide()
        }.bind(this)
        
        // POST VIEW
        this.postsView = new PostsView // Llamamos a la clase PostsView
        
        // NEW POST VIEW
        this.newPostView = new NewPostView // Llamamos a la clase NewPostView
        
        // NEW POST BUTTON
        this.newPostButton = this.container.querySelector('#new-post-button')
        
        this.newPostButton.onclick = function (event) {
            event.preventDefault()
        
            this.newPostView.show()
            this.profileView.hide()
            this.postsView.hide()
        }.bind(this)        
    }
}