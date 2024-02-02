const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')

function retrievePosts(userId, callback) {
  validateText(userId, 'user id')
  validateFunction(callback, 'callback')

  JSON.parseFromFile('./data/users.json', (error, users) => {
    if (error) {
      callback(error)

      return
    }

    const user = users.find((user) => user.id === userId)

    if (!user) {
      callback(new Error('user not found'))

      return
    }
    // el fichero de posts es una copia, no el fichero original. lo mismo con el de usuarios. trabajamos siempre con una copia en memoria convertido a objeto, no con el fichero original.
    // como los posts y los usuario están cargados en memoria (el json.parse nos trae todos los posts y todos los usuarios), todo esto es un proceso síncrono. Esto sería insostenible cuando tengamos muchos usuarios. Es de juguete este código, que nos sirve hasta que lleguemos a Mongo ;)
    JSON.parseFromFile('./data/posts.json', (error, posts) => {
      if (error) {
        callback(error)

        return
      }
      // primero vamos a ver qué posts tienen un like nuestro:
      posts.forEach((post) => {
        // aqui le ponemos true or false a la propiedad del post:
        post.liked = post.likes.includes(userId)

        const author = users.find((user) => user.id === post.author)

        //TODO -what if the author suddenly doesn't exist?

        //reemplazamos el string post.author que hemos encontrado en la línea anterior (const author = ...) por una referencia a este objeto en memoria, y al autor le ponemos más datos (ie. añadimos el name, para que no solo sea el id). Esto lo ponemos para saber si es nuestro el post y si lo es añadimos luego la opción de borrar y editar
        post.author = {
          id: author.id,
          name: author.name,
        }

        // calculamos si el post es favorito o no del usuario, buscando en su array de favoritos, a ver si está incluido el id del post.
        post.fav = user.favs.includes(post.id)
      })

      // en cuanto terminamos el forEach, hacemos el callback. Hemos mutado todos los posts en la copia.
      callback(null, posts)
    })
  })
}

module.exports = retrievePosts
