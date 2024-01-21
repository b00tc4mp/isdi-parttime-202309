import validate from './helpers/validate.js'

import { User, Post } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'

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

export default toggleLikePost