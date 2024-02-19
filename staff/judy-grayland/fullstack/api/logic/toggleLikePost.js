import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors
import { User, Post } from '../data/models.js'

// TODO use models

function toggleLikePost(userId, postId) {
  validate.id(userId, 'user id')
  validate.text(postId, 'post id')

  return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('user not found')
      }
      return Post.findById(postId)
        .catch((error) => {
          throw new SystemError(error.message)
        })
        .then((post) => {
          if (!post) {
            throw new NotFoundError('post not found')
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
          return post
            .save()
            .catch((error) => {
              throw new SystemError(error.message)
            })
            .then(() => {})
        })
    })

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

export default toggleLikePost
