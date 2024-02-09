const { NotFoundError, SystemError } = require("./errors");
const validate = require('./helpers/validate')
const { User, Post } = require('../data/models')

function toggleLikePost(userId, postId, callback) {
    validate.id(userId, "user id")
    validate.id(postId, "post id")
    validate.function(callback, "callback")

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }

            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('Post not found'))
                    }

                    let index = post.likes.indexOf(userId)
                    if (index !== -1) {
                        post.likes.splice(index, 1)
                    } else {
                        post.likes.push(userId)
                    }
                    post.save()

                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))
}



module.exports = toggleLikePost