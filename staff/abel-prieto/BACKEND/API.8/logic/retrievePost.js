const { Post, User } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')
const { validateText, validateFunction } = require('./helpers/validators')

function retrievePost(userId, callback) {
    validateText(userId, 'post id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Post.find({})
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('post not found'))

                        return
                    }

                    callback(null, post)
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrievePost
