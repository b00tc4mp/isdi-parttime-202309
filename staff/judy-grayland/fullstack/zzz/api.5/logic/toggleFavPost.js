import { NotFoundError, SystemError } from './errors.js'
import validate from './helpers/validate.js'

import { User, Post } from '../data/models.js'

// TODO use models

function toggleFavPost(userId, postId, callback) {
  validate.id(userId, 'user id')
  validate.text(postId, 'post id')
  validate.function(callback, 'callback')

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

export default toggleFavPost
