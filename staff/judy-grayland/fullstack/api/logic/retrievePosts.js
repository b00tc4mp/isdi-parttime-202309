import { validate, errors } from 'com'

import { User, Post } from '../data/models.js'
const { NotFoundError, SystemError } = errors

function retrievePosts(userId) {
  validate.id(userId, 'user id')

  return User.findById(userId)
    .lean()
    .catch((error) => {
      //este catch va con el findById para pillar errores de Mongo - es raro que ocurran, pero puede haber
      throw new SystemError(error.message)
    })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('user not found')
      }

      // con el populate hacemos referencia al Usuario, y traemos el author. como solo queremos el nombre, lo indicamos como segundo parámetro.
      return (
        Post.find()
          .populate('author', 'name')
          // con esta opción eliminamos el _v que viene por defecto
          .select('-__v')
          .lean()
          // este catch va con el .find() que la línea 20
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
            // el siguiente .then() que esté fuera va a recibir estos posts: (en el .test.js sería el then de la línea 20, dentro de retrievePosts)
            return posts
          })
      )
    })
}

export default retrievePosts
