import { Post, User } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError, NotFoundError } = errors

function commentPost(userId, postId, comment) {
    validate.id(userId, 'user id')
    validate.id(postId, 'postId')
    validate.text(comment, 'text')

    return User.findById(userId, 'name').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            const userName = user.name
            if (!user)
                throw new NotFoundError('User not found')

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
                .then(post => {
                    if (!post)
                        throw new NotFoundError('Post not found')

                    const comment = {
                        author: userId,
                        text: comment
                    }

                    post.comments.push(comment)

                    return post.save()
                        .catch(error => { throw new SystemError(error.message) })


                })

                .then(user => userName)
        })

}

export default commentPost