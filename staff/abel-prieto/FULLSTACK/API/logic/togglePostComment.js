import { Post, User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

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

                    post.comments.push(comment)

                    post.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

export default togglePostComment