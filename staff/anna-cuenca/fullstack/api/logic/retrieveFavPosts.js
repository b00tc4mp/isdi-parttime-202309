import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'

import { Post, User } from '../data/models.js'

function retrieveFavPosts(userId, callback) {
    validate.id(userId, 'user id')
    validate.function(callback, 'callback')

    User.findById(userId).lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }

            //Quiero buscar los posts que corresponden a los favoritos del usuario

            Post.find({ _id: { $in: user.favs } }).populate('author', 'name').lean()
                //dame todos los posts que tengan el id dentro de este set de ids que te comparto

                .then(posts => {
                    // vamos a limpiar los posts, porque no queremos que traigan información de más
                    //usamos el lean() para que nos devuleva documentos y no se pueden manipular, como no queremos modificarlo, usamos un lean()
                    posts.forEach(post => {
                        post.id = post._id.toString() // Lo convierto a string
                        delete post._id; // borro el _id

                        if (post.author && post.author._id) {
                            post.author.id = post.author._id.toString();
                            delete post.author._id;
                        }

                        delete post.__v; // esto es una propiedad que pone mongoose, pero como no lo quiero, lo elimino

                        post.likes = post.likes.map(userObjectId => userObjectId.toString()) // Hago un mapeo con todos los likes que hay en el array

                        post.liked = post.likes.includes(userId) // devuelvo un true o un false
                        post.fav = user.favs.some(fav => fav.toString() === post.id) // no puedo usar includes porque son referencias a objectos
                        // el some lo que hace es mirar si algun objeto de se array cumple con la condicion

                    })
                    callback(null, posts)

                })

                .catch(error => callback(new SystemError(error.message)))


        })

        .catch(error => callback(new SystemError(error.message)))


}

export default retrieveFavPosts