class PostsView extends Component{
    constructor() {
        super(document.getElementById('post-view'))
    }

    // Method RENDER POSTS
    renderPosts() {
        this.container.innerHTML = ''
    
        try {
            const posts = logic.retrievePosts()
    
            posts.forEachReverse(function (post, index) {
                const article = document.createElement('article')    
                article.setAttribute('class', 'post')   
        
                const tittle = document.createElement('h2')
                tittle.innerText = post.author                         
        
                const imgage = document.createElement('img')
                imgage.setAttribute('class', 'post-img')
                imgage.src = post.image                               
        
                const text = document.createElement('p')
                text.innerText = post.text

                const likeButton = document.createElement('button')
                likeButton.innerText = `${post.likes.includes(logic.loggedInEmail) ? '❤️' : '🤍'} ${post.likes.length ? `${post.likes.length} likes` : ''}`
        
                likeButton.onclick = function(event) {
                    event.preventDefault()

                    try {
                        logic.toggleLikePost(index)

                        this.renderPosts()
                    } catch(error) {
                        alert(error.message)
                    }
                }.bind(this)

                article.append(tittle, imgage, text, likeButton)                         
        
                this.container.append(article)
                
                this.show()
            }.bind(this))
            
        } catch(error) {
            alert(error.message)
        }
    }
}