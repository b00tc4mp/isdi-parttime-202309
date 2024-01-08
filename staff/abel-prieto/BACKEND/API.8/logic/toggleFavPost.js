const { User, Post } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')
const { validateText, validateFunction } = require('./helpers/validators')

function toggleFavPost(postId, userId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    Post.findById(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('post not found'))

                return
            }

            User.findById(userId)
                .then(user => {
                    if (!user) {
                        callback(new NotFoundError('user not found'))

                        return
                    }

                    const postIndex = user.favs.indexOf(postId)

                    if (postIndex < 0) {
                        user.favs.push(postId)
                    } else {
                        user.favs.splice(postIndex, 1)
                    }

                    user.save()
                        .then(() => {
                            callback(null)
                        })
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = toggleFavPost