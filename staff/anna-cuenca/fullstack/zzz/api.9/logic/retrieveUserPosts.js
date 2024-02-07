import { validate, errors } from 'com'

import { Post, User } from '../data/models.js'

const { SystemError, NotFoundError } = errors

function retrieveUserPosts(userId) {
    validate.id(userId, 'user id')

    //comprobamos que el usuario existe
    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')
            }
            //buscamos los posts del userId
            return Post.find({ author: userId }).populate('author', 'name').lean()

                .catch(error => { throw new SystemError(error.message) })
                .then(userPosts => {

                    userPosts.forEach(userPost => {
                        userPost.id = userPost._id.toString() //modificamos como mongo hace lo de _
                        delete userPost._id

                        if (userPost.author && userPost.author._id) {
                            userPost.author.id = userPost.author._id.toString()
                            delete userPost.author._id
                        }

                        delete userPost.__v //eliminamos __v es una cosa que hace mongo

                        userPost.likes = userPost.likes.map(userObjectId => userObjectId.toString()) // se transforma de ser un array de ObjectId a ser un array de cadenas de texto

                        userPost.liked = userPost.likes.includes(userId) //tmb le añadimos la propiedad liked

                        userPost.fav = user.favs.some(fav => fav.toString() === userPost.id) // y si lo tiene marcado como favorito
                    })

                    return userPosts


                })



        })
}

export default retrieveUserPosts