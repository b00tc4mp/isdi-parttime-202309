const { validateId, validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')

const { Post } = require('../data/models')

function updatePostText(userId, postId, text, callback) {
    validateId(userId, 'user id')
    validateId(postId, 'post id')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    Post.findById(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('user not found'))

                return
            }

            post.text = text

            post.save()
                .then(callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = updatePostText