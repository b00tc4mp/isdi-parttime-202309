
import { User, Post } from '../data/models.js'

const { SystemError, NotFoundError, CredentialsError } = errors

import { validate, errors } from 'com'

function updatePostText(userId, postId, text, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.text(text, 'text')
    validate.function(callback, 'callback')

    Post.findById(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('post id not found'))
                return
            }

            else if (post.author.toString() !== userId) {
                callback(new CredentialsError('post do not belong to the user'))
                return
            }

            post.text = text
            post.save()
                .then(callback(null))
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))

}

export default updatePostText

