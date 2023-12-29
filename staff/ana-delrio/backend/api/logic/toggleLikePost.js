
const { User, Post } = require('../data/models')
const { NotFoundError, SystemError } = require("./errors")
const { validateId, validateFunction } = require("./helpers/validators")

function toggleLikePost(userId, postId, callback) {
    validateId(userId, 'user id')
    validateId(postId, 'post id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user id do not exist'))
                return
            }

            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('post id do not exist'))
                        return
                    }

                    const userIdLikeIndex = post.likes.findIndex(like => like.toString() === userId)
                    if (userIdLikeIndex < 0) {
                        post.likes.push(userId)
                    }
                    else post.likes.splice(userIdLikeIndex, 1)

                    post.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))

                })
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))

}

module.exports = toggleLikePost

