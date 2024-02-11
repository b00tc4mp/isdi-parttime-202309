import validate from './helpers/validate.js'

import { User, Post } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'

function toggleLikePost(userId, postId) {
    validate.text(userId, 'user id')
    validate.text(postId, 'post id')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
                .then(post => {
                    if (!post)
                        throw new NotFoundError('post not found')

                    const index = post.likes.findIndex(userObjectId => userObjectId.toString() === userId)

                    if (index < 0)
                        post.likes.push(userId)
                    else
                        post.likes.splice(index, 1)

                    return post.save()
                        .catch(error => { throw new SystemError(error.message) })
                        .then(() => { })
                })
        })

}

export default toggleLikePost