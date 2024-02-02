const validate = require('./helpers/validate')

const { User, Post } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function retrievePosts(userId, callback) {
  validate.id(userId, 'user id')
  validate.function(callback, 'callback')

  User.findById(userId)
    .lean()
    .then((user) => {
      if (!user) {
        callback(new NotFoundError('user not found'))

        return
      }

      // con el lean() hacemos que nos devuelva únicamente el documento
      // con el populate hacemos referencia al Usuario, y traemos el author. como solo queremos el nombre, lo indicamos como segundo parámetro.
      Post.find()
        .populate('author', 'name')
        .lean()
        .then((posts) => {
          posts.forEach((post) => {
            post.id = post._id.toString()
            delete post._id

            if (post.author._id) {
              post.author.id = post.author._id.toString()
              delete post.author._id
            }

            delete post.__v

            // saneamos los likes para que convertir todos los ObjectId que salen en likes a string
            post.likes = post.likes.map((userObjectId) =>
              userObjectId.toString()
            )
            //miramos a ver si es un post al que le ha dado like el usuario:
            post.liked = post.likes.includes(userId)
            //miramos a ver si el post está guardado en los favs del user
            post.fav = user.favs.some(
              (postObjectId) => postObjectId.toString() === post.id
            )
          })

          callback(null, posts)
        })
        .catch((error) => callback(new SystemError(error.message)))
    })
    .catch((error) => callback(new SystemError(error.message)))
}

module.exports = retrievePosts
