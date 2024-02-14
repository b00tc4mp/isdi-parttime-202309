import { NotFoundError, SystemError } from './errors.js'
import validate from './helpers/validate.js'

import { User, Post } from '../data/models.js'

// TODO use models

function toggleFavPost(userId, postId) {
  validate.id(userId, 'user id')
  validate.text(postId, 'post id')

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('user not found')
      }

      return Post.findById(postId)
        .lean()
        .catch((error) => {
          throw new SystemError(error.message)
        })
        .then((post) => {
          if (!post) {
            throw new NotFoundError('post not found')
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
          return user
            .save()
            .catch((error) => {
              throw new SystemError(error.message)
            })
            .then(() => {})
        })
    })
}

export default toggleFavPost
