const { User, Post } = require('../data/models')
const { SystemError, NotFoundError, ContentError } = require('./errors')
const { validateText, validateFunction } = require('./helpers/validators')

function updatePostText(userId, postId, newText, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateText(newText, 'text')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('post not found'))

                        return
                    }

                    // if (post.author !== userId) {
                    //     callback(new ContentError('this is not your post'))

                    //     return
                    // }

                    post.text = newText

                    post.save()
                        .then(() => {
                            callback(null)
                        })
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = updatePostText