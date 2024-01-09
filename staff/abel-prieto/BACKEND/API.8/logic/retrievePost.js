const { Post, User } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')
const { validateText, validateFunction } = require('./helpers/validators')

function retrievePost(userId, callback) {
    validateText(userId, 'post id')
    validateFunction(callback, 'callback')

    User.findById(userId).lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Post.find().populate('author', 'name').lean()
                // Con .populate() nos permite traernos a una propiedad (1) lo que le pidamos, si está referenciado (2)
                // Con .lean() nos traemos, en vez de el modelo de dato, SOLO el documento
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        if (post.author._id) {
                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }
                        // Por si hubiera varios post del mismo author

                        delete post.__v

                        post.likes = post.likes.map(userObjectId => userObjectId.toString())
                        post.liked = post.likes.includes(userId)

                        post.fav = user.favs.some(postObjectId => postObjectId.toString() === post.id)
                    })

                    callback(null, posts)
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrievePost
