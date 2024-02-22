const { NotFoundError, SystemError } = require('./errors')
const {
  validateText,
  validateFunction,
  validateId,
} = require('./helpers/validators')

const { User, Post } = require('../data/models')

// TODO use models

function toggleFavPost(userId, postId, callback) {
  validateId(userId, 'user id')
  validateText(postId, 'post id')
  validateFunction(callback, 'callback')

  User.findById(userId)
    .then((user) => {
      if (!user) {
        callback(new NotFoundError('user not found'))
        return
      }

      // no ponemos .lean() cuando vamos a modificar y guardar el dato.
      Post.findById(postId)
        .lean()
        .then((post) => {
          if (!post) {
            callback(new NotFoundError('post not found'))
            return
          }

          const index = user.favs.findIndex(
            (postObjectId) => postObjectId.toString() === postId
          )
          if (index < 0) {
            //estamos pusheando un userId (un string), pero mongoose es inteligente y lo convierte automáticamente a userObjectId
            user.favs.push(postId)
          } else {
            user.favs.splice(index, 1)
          }
          // una vez hechas las modificaciones, tenemos que guardarlas en BBDD:
          user
            .save()
            .then(() => callback(null))
            .catch((error) => callback(new SystemError(error.message)))
        })
        .catch((error) => callback(new SystemError(error.message)))
    })
    .catch((error) => callback(new SystemError(error.message)))
}

module.exports = toggleFavPost
