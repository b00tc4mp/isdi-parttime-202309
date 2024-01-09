const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')
const { Post } = require('../data/models')

function deletePost(postId, callback) {
    validateText(postId, 'id')
    validateFunction(callback, 'callback')

    Post.findByIdAndDelete(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('post not found'))

                return
            }

            callback(null, post)
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = deletePost