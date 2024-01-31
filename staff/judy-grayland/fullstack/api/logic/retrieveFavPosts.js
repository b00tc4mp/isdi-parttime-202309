const { validateId, validateFunction } = require('./helpers/validators')

const { User, Post } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function retrieveFavPosts(userId, callback) {
  validateId(userId, 'user id')
  validateFunction(callback, 'callback')

  User.findById(userId)
    .lean()
    .then((user) => {
      if (!user) {
        callback(new NotFoundError('user not found'))

        return
      }

      // con este parámetro dentro del .find buscamos únicamente los posts cuyo id estén entro del array de favs del usuario
      Post.find({ _id: { $in: user.favs } })
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

module.exports = retrieveFavPosts
