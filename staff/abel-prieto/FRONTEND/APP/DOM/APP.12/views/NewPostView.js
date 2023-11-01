class NewPostView extends Component{
    constructor() {
        super(document.getElementById('new-post-view'))

        this.hide()
        
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
            
                this.hide()
            
                // RENDERIZADO DE POST
            
                homeView.postsView.renderPosts()
            } catch(error) {
                alert(error.message)
            }
        }.bind(this)
        
        // CANCEL NEW POST BUTTON
        this.cancelNewPostButton = this.container.querySelector('#cancel-new-post')
        
        this.cancelNewPostButton.onclick = function (event) {
            event.preventDefault()
        
            this.newPostForm.reset()
        
            this.postsView.show()
            this.hide()
        }.bind(this)
    }
}