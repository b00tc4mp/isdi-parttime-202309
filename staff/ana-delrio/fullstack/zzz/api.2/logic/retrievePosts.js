const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')


function retrievePosts(userId, callback) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')


    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(error)

            return
        }

        // Se busca el usuario en el array 'users' con el userId proporcionado
        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new Error('user not found'))

            return
        }

        // Se utiliza JSON.parseFromFile para leer el archivo './data/users.json'
        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(error)

                return
            }
            // devolvemos los posts
            posts.forEach(post => {
                // primero vemos si le dimos al like
                post.liked = post.likes.includes(userId)

                // Encuentra al autor del post en el array de usuarios y modifica la propiedad 'author'
                const author = users.find(user => user.id === post.author)

                post.author = {
                    id: author.id,
                    name: author.name
                }

                // Agrega una propiedad 'fav' al post indicando si el post está en los favoritos del usuario
                post.fav = user.favs.includes(post.id)


            })
            // Llama a la función de devolución de llamada sin error y con la lista de posts modificada
            callback(null, posts)

        })

    })
}

module.exports = retrievePosts