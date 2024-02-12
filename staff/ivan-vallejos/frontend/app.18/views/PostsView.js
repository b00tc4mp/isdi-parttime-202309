class PostsView extends Component {
    constructor () {
        super (document.getElementById ('post-view'))
    }

    renderPosts () {
        this.container.innerHTML = ''

        try{
            const posts = logic.retrievePosts ()

            posts.forEachReverse (function (post) {
                const article = document.createElement ('article')
                article.setAttribute ('class','post')

                const h2 = document.createElement ('h2')
                h2.innerText = post.author

                const img = document.createElement ('img')
                img.setAttribute ('class','post-image')
                img.src = post.image

                const text = document.createElement ('p')
                text.innerText = post.text

                const likeButton = document.createElement ('button')
                likeButton.innerText = `${post.likes.includes(logic.loggedInEmail) ? '❤️' : '🤍'} ${post.likes.length ? `(${post.likes.length})` : ''}`
                likeButton.onclick = function () {
                    try {
                        logic.toggleLikePost (index)

                        this.renderPosts ()
                    } catch (error) {
                        alert (error.message)
                    }
                }.bind (this)

                article.append (h2, img, text, likeButton)

                this.container.append (article)
            }.bind (this))
        } catch (error) {
            alert (error.message)
        }
    }
}