const { Post } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')
const { validateText, validateFunction } = require('./helpers/validators')


function toggleLikePost(userId, postId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    Post.findById(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('post not found'))

                return
            }

            const userIndex = post.likes.indexOf(userId)

            if (userIndex < 0) {
                post.likes.push(userId)
            } else {
                post.likes.splice(userIndex, 1)
            }

            callback(null)
        })
        .catch(error => callback(new SystemError(error.message)))
    
}

module.exports = toggleLikePost