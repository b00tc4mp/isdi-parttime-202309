import { validate, errors } from 'com'

import { User, Post } from '../data/models.js'
const { NotFoundError, SystemError } = errors

function retrieveFavPosts(userId) {
  validate.id(userId, 'user id')

  return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('user not found')
      }
      // con este parámetro dentro del .find buscamos únicamente los posts cuyo id estén entro del array de favs del usuario
      return Post.find({ _id: { $in: user.favs } })
        .populate('author', 'name')
        .select('-__v')
        .lean()
        .catch((error) => {
          throw new SystemError(error.message)
        })
        .then((posts) => {
          posts.forEach((post) => {
            post.id = post._id.toString()
            delete post._id

            if (post.author._id) {
              post.author.id = post.author._id.toString()
              delete post.author._id
            }

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

          return posts
        })
    })
}

export default retrieveFavPosts
