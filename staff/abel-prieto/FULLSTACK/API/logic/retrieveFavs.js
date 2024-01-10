const { User, Post } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')
const { validateText, validateId, validateFunction } = require('./helpers/validators')

function retrieveFavs(userId, callback) {
    validateText(userId, 'user id')
    validateId(userId, 'user id')
    validateFunction(callback, 'callback')

    User.findById(userId).lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Post.find({ _id: {$in: user.favs} }).populate('author', 'name').lean()
                .then(favs => {
                    favs.forEach(post => {
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

                    callback(null, favs)
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
} 

module.exports = retrieveFavs