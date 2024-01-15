const { Post, User } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')
const validate = require('./helpers/validate')

function togglePostComment(userId, postId, comment, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.text(comment, 'comment')
    validate.function(callback, 'callback')

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

                    // post.comments.push([
                    //     {
                    //         author: user.name,
                    //         comment: comment,
                    //         date: newDate()
                    //     }
                    // ])

                    post.comments.push(comment)

                    post.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = togglePostComment