const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')

function retrievePosts(userId, callback) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => { // primero validamos el usuario
        if (error) {
            callback(error)

            return
        }

        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new Error('user not found'))

            return
        }
        // el usuario existe, ahora vamos a por los posts

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(error)

                return
            }

            // tenemos todos los posts en memoria

            // esta función indica si se ha dado like o fav a un post, es una información que no se tiene
            // cuando se crea un post



            posts.forEach(post => { // para cada post
                post.liked = post.likes.includes(userId) // mirar si le hemos dado like
                // le ponemos true/false a esa propiedad del post, depende de si incluye el userId o no

                // para cada post, tabmién buscamos el autor
                const author = users.find(user => user.id === post.author)


                // encuentro el autor, reemplazo el string post.author por la referencia a este objeto 
                // en memoria, le añado más datos.
                post.author = {
                    id: author.id, //el id lo necesitamos en front para saber si activamos los botones
                    name: author.name
                }

                // miramos si el post está en los favoritos del usuario
                post.fav = user.favs.includes(post.id)
            })

            callback(null, posts)
        })
    })
}

module.exports = retrievePosts