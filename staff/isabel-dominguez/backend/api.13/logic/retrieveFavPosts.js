const { validateId, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')

const { User, Post } = require('../data/models')

function retrieveFavPosts(userId, callback) {
    validateId(userId, 'user id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Post.find({ _id: user.favs }).exec()
                .then(userFavPosts => callback(null, userFavPosts))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrieveFavPosts