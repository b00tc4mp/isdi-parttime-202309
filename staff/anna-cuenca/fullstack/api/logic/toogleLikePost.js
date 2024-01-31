import { validate, errors } from 'com'

import { Post, User } from '../data/models.js'

const { SystemError, NotFoundError } = errors

function toggleLikePost(userId, postId) {
    validate.id(userId, "user id")
    validate.id(postId, "post id")


    return User.findById(userId)
        .catch(error => callback(new SystemError(error.message)))
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')



            return Post.findById(postId)
                .catch(error => callback(new SystemError(error.message)))
                .then(post => {
                    if (!post)
                        throw new NotFoundError('Post not found')


                    let index = post.likes.indexOf(userId)
                    if (index !== -1) {
                        post.likes.splice(index, 1)
                    } else {
                        post.likes.push(userId)
                    }
                    return post.save()

                        .catch(error => callback(new SystemError(error.message)))
                        .then(() => { })
                })

        })
}



export default toggleLikePost