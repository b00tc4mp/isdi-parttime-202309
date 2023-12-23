class PostsView extends Component {
    constructor() {
        super(document.getElementById('posts-view'))
    }

    renderPosts() {
        this.container.innerHTML = ''

        try {
            const posts = logic.retrievePosts()

            posts.forEachReverse(function (post, index) {
                const article = document.createElement('article')
                article.setAttribute('class', 'post')

                // cambiamos la semántica de los nombres, para que sena un poco más adecuados
                const title = document.createElement('h2')
                title.innerText = post.author

                const image = document.createElement('img')
                image.setAttribute('class', 'post-image')
                image.src = post.image

                const text = document.createElement('p')
                text.innerText = post.text

                // creamos el botón de like
                // el boton es una acción, no una navegación, por eso ponemos un button
                const likeButton = document.createElement('button')
                // Dividimos la explicación en dos partes
                // PRIMERA PARTE: post.likes.includes(logic.loggedInEmail) verifica si el correo electrónico del usuario actual (logic.loggedInEmail) se encuentra en el array post.likes.
                // Esto indica si el usuario actual ya le ha dado "Me gusta" a esta publicación
                // Si el usuario actual ha dado "Me gusta" (la expresión es verdadera), se muestra un emoji de corazón ('❤️'). Si el usuario actual no ha dado "Me gusta" (la expresión es falsa), 
                // se muestra un emoji de corazón blanco ('🤍').
                // SEGUNDA PARTE: post.likes.length verifica si el array post.likes tiene algún "Me gusta". Si la longitud del array es mayor que cero (hay "Me gusta"), 
                // se muestra el número de "Me gusta" entre paréntesis (por ejemplo, "(3)"). Si el array está vacío (ningún "Me gusta"), no se muestra nada (cadena vacía)
                likeButton.innerText = `${post.likes.includes(logic.loggedInEmail) ? '❤️' : '🤍'} ${post.likes.length ? `(${post.likes.length})` : ''}`
                // Asigna una función al evento 'onclick' del botón 'likeButton'
                likeButton.onclick = function () {
                    try {
                        // usamos el índice del forEachReverse para buscar el post en la base de datos
                        // Utiliza el índice del post ('index') 
                        // para buscar y cambiar el estado de "me gusta" en la base de datos
                        logic.toggleLikePost(index)

                        // volver a refrescar los post, si le he dado like a un post
                        // Luego vuelve a cargar la lista de publicaciones, 
                        // supongo que para reflejar el cambio en el estado de "me gusta"
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