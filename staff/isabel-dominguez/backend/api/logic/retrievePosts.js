const { validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')
const { Post } = require('../data/models')

function retrievePosts(callback) {
    validateFunction(callback, 'callback')

    Post.find({})
        .then(posts => {
            if (!posts) {
                callback(new NotFoundError('posts not found'))

                return
            }

            callback(null, { posts })
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrievePosts