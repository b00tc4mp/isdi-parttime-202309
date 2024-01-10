const { User, Post } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')
const { validateText, validateFunction } = require('./helpers/validators')

function updatePostText(userId, postId, postText, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateText(postText, 'text')
    validateFunction(callback, 'callback')

    User.findById(userId).lean()
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

                    post.text = postText

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