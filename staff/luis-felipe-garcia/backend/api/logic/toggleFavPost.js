const { User, Post } = require('../data/models')
const { validateId, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')

function toggleFavPost(userId, postId, callback) {
    validateId(userId, 'user id')
    validateId(postId, 'post id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user do not found'))
                return
            }

            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('post do not found'))
                        return
                    }
                    const postIdFavIndex = user.favs.findIndex(fav => fav.toString() === postId)

                    if (postIdFavIndex < 0) {
                        user.favs.push(postId)

                    } else {
                        user.favs.splice(postIdFavIndex, 1)
                    }

                    user.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = toggleFavPost