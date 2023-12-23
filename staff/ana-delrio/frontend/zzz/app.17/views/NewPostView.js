class NewPostView extends Component {
    constructor() {
        super(document.getElementById('new-post-view'))

        // que inicialmente aparezca apagado 
        this.hide()

        // dentro del contenedor del NewPostView, buscamos el formulario
        this.newPostForm = this.container.querySelector('#new-post-form')

        this.cancelNewPostButton = this.newPostForm.querySelector('#cancel-new-post-button')

        this.cancelNewPostButton.onclick = function (event) {
            event.preventDefault()

            this.hide()
            this.newPostForm.reset()
        }.bind(this)

        this.newPostForm.onsubmit = function (event) {
            event.preventDefault()

            const imageInput = this.newPostForm.querySelector('#image-input')
            const textInput = this.newPostForm.querySelector('#text-input')

            const image = imageInput.value
            const text = textInput.value

            try {
                logic.publishPost(image, text)

                this.newPostForm.reset()

                // apagamos el panel de NewPost
                this.hide()

                // re-render posts

                // Aquí hacemos que se refresque la home una vez que publiquemos post
                homeView.postsView.renderPosts()
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
    }
}