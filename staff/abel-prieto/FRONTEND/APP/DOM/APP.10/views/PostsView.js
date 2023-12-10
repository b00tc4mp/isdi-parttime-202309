class PostsView extends Component{
    constructor() {
        super(document.getElementById('post-view'))
    }

    // Method RENDER POSTS
    renderPosts() {
        this.container.innerHTML = ''
    
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
        
                this.container.append(article)
                
                this.show()
            }.bind(this))
            
        } catch(error) {
            alert(error.message)
        }
    }
}