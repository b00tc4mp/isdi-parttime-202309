const { User, Post } = require('../data/models')
const validate = require('./helpers/validate')
const { SystemError, NotFoundError } = require('./errors')

function toggleFavPost(userId, postId, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user do not found'))
                return
            }

            Post.findById(postId).lean()
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('post do not found'))
                        return
                    }
                    const index = user.favs.findIndex(fav => fav.toString() === postId)

                    if (index < 0) {
                        user.favs.push(postId)

                    } else {
                        user.favs.splice(index, 1)
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