const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')

const { User, Post } = require('../data/models')

function toggleLikePost(userId, postId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not exist'))

                return
            }

            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('post not exist'))

                        return
                    }

                    const indexLikes = post.likes.findIndex(like => like.toString() === userId)

                    if (indexLikes < 0) {
                        post.likes.push(userId)
                    }
                    else post.likes.splice(indexLikes, 1)

                    post.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))

                })
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = toggleLikePost