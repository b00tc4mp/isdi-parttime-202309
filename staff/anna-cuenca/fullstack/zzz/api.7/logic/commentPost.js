import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'

import { Post, User } from '../data/models.js'

function commentPost(userId, postId, commentText) {
    validate.id(userId, 'user id')
    validate.id(postId, 'postId')
    validate.text(commentText, 'text')

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
                        text: commentText
                    }

                    post.comments.push(comment)

                    return post.save()
                        .catch(error => { throw new SystemError(error.message) })


                })

                .then(user => userName)
        })

}

export default commentPost