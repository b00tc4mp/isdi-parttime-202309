class PostsView extends Component {
    constructor() {
        super(document.getElementById('posts-view'))
    }

    renderPosts() {
        this.container.innerHTML = ''

        try {
            const posts = logic.retrievePosts()

            // Itera a través de la lista de posts en orden inverso
            posts.forEachReverse(function (post, index) {
                const article = document.createElement('article')
                article.setAttribute('class', 'post')

                const title = document.createElement('h2')
                title.innerText = post.author

                const image = document.createElement('img')
                image.setAttribute('class', 'post-image')
                image.src = post.image

                const text = document.createElement('p')
                text.innerText = post.text

                // Crea un botón para dar 'me gusta' al post, con texto dinámico basado en si el usuario ya le dio 'me gusta' o no
                const likeButton = document.createElement('button')
                likeButton.innerText = `${post.isFav ? '❤️' : '🤍'} ${post.likes.length} likes`

                // Definimos un manejador de eventos para el botón de 'me gusta'
                likeButton.onclick = function () {
                    try {
                        // Llamamos a la función toggleLikePost para cambiar el estado de 'me gusta' del post
                        logic.toggleLikePost(index)

                        // Volvemos a renderizar los posts después de dar 'me gusta'
                        this.renderPosts()
                    } catch (error) {
                        alert(error.message)
                    }
                }.bind(this)

                article.append(title, image, text, likeButton)

                this.container.append(article)
            }.bind(this))
        } catch (error) {
            alert(error.message)
        }
    }
}