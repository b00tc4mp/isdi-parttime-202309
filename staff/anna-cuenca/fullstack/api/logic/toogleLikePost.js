import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'

import { Post, User } from '../data/models.js'

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



export default toggleLikePost