const { validateText, validateFunction, validateId } = require('./helpers/validators')
const { User, Post } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors.js')

function retrievePosts(userId, callback) {
    validateId(userId, 'user id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }

            Post.find({}).populate('author')
                // recupero el post y los detalles del autor
                .then(posts => {
                    if (!posts) {
                        callback(new NotFoundError('posts not found'))
                        return
                    }
                    // tengo a los posts guardados en posts
                    // hago un mapeo para comprobar si está el like/fav
                    const modifiedPosts = []; // creo un array vacio
                    posts.forEach(post => {
                        const postObject = post.toObject();

                        postObject.liked = postObject.likes.includes(userId);
                        postObject.faved = user.favs.includes(postObject._id);

                        modifiedPosts.push(postObject);

                    })
                    callback(null, modifiedPosts)

                })


        })

        .catch(error => callback(new SystemError(error.message)))


}

module.exports = retrievePosts