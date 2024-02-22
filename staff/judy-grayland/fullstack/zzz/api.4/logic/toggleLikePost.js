const { NotFoundError, SystemError } = require('./errors')
const validate = require('./helpers/validate')

const { User, Post } = require('../data/models')

// TODO use models

function toggleLikePost(userId, postId, callback) {
  validate.id(userId, 'user id')
  validate.text(postId, 'post id')
  validate.function(callback, 'callback')

  User.findById(userId)
    .lean()
    .then((user) => {
      if (!user) {
        callback(new NotFoundError('user not found'))
        return
      }

      // no ponemos .lean() cuando vamos a modificar y guardar el dato.
      Post.findById(postId)
        .then((post) => {
          if (!post) {
            callback(new NotFoundError('post not found'))
            return
          }

          const index = post.likes.findIndex(
            (userObjectId) => userObjectId.toString() === userId
          )
          if (index < 0) {
            //estamos pusheando un userId (un string), pero mongoose es inteligente y lo convierte automáticamente a userObjectId
            post.likes.push(userId)
          } else {
            post.likes.splice(index, 1)
          }
          // una vez hechas las modificaciones, tenemos que guardarlas en BBDD:
          post
            .save()
            .then(() => callback(null))
            .catch((error) => callback(new SystemError(error.message)))
        })
        .catch((error) => callback(new SystemError(error.message)))
    })
    .catch((error) => callback(new SystemError(error.message)))

  // JSON.parseFromFile('./data/users.json', (error, users) => {
  //   if (error) {
  //     callback(new SystemError(error.message))

  //     return
  //   }

  //   const user = users.find((user) => user.id === userId)

  //   if (!user) {
  //     callback(new NotFoundError('user not found'))

  //     return
  //   }

  //   JSON.parseFromFile('./data/posts.json', (error, posts) => {
  //     if (error) {
  //       callback(new SystemError(error.message))

  //       return
  //     }

  //     const postIndex = posts.findIndex((post) => post.id === postId)

  //     if (postIndex < 0) {
  //       callback(new NotFoundError('post not found'))

  //       return
  //     }

  //     const post = posts[postIndex]

  //     const userIdIndex = post.likes.indexOf(userId)

  //     if (userIdIndex < 0) {
  //       post.likes.push(userId)
  //     } else {
  //       post.likes.splice(userIdIndex, 1)
  //     }

  //     // todo lo anterior lo hemos hecho en el objeto en memoria. tenemos que guardarlo en disco:
  //     JSON.stringifyToFile('./data/posts.json', posts, (error) => {
  //       if (error) {
  //         callback(new SystemError(error.message))

  //         return
  //       }

  //       callback(null)
  //     })
  //   })
  // })
}

module.exports = toggleLikePost
