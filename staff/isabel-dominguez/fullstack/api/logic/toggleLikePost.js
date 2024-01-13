const validate = require('./helpers/validate')
const { SystemError, NotFoundError } = require('./errors')

const { User, Post } = require('../data/models')

function toggleLikePost(userId, postId, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.function(callback, 'callback')

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

                    const index = post.likes.findIndex(userObjectId => userObjectId.toString() === userId)

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