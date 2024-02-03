import { validate, errors } from 'com'

import { Post, User } from '../data/models.js'

const { NotFoundError, CredentialsError, SystemError } = errors

function editTextPost(userId, postId, text) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.text(text, 'text')


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')

            }

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
                .then(post => {
                    if (!post) {
                        throw new NotFoundError('Post not found')
                    }

                    // Comprueba si el usuario es el autor del post
                    if (userId.toString() !== post.author.toString()) {
                        throw new CredentialsError('Wrong Credentials')

                    }

                    // Edita el texto
                    post.text = text

                    return post.save()
                        .catch(error => { throw new SystemError(error.message) })
                        .then(() => { })



                })
        })
}

export default editTextPost;