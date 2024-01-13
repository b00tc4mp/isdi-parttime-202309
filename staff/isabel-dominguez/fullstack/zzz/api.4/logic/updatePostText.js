const { validateId, validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')

const { User, Post } = require('../data/models')

function updatePostText(userId, postId, text, callback) {
    validateId(userId, 'user id')
    validateId(postId, 'post id')
    validateText(text, 'text')
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