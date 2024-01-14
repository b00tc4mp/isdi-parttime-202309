const validate = require('./helpers/validate')
const { NotFoundError, SystemError } = require("./errors")
const { User, Post } = require('../data/models')

function toggleLikePost(userId, postId, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.function(callback, 'callback')

    User.findById(userId).lean()
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

                    const index = post.likes.findIndex(like => like.toString() === userId)
                    if (index < 0) {
                        post.likes.push(userId)
                    }
                    else post.likes.splice(index, 1)

                    post.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))

                })
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))


}

module.exports = toggleLikePost