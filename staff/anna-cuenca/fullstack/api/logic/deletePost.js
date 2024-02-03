import { validate, errors } from 'com'


import { Post, User } from '../data/models.js'

const { NotFoundError, CredentialsError, SystemError } = errors

function deletePost(userId, postId) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')


    return Post.findById(postId)
        .catch(error => { throw new SystemError(error.message) })
        .then(post => {
            if (!post) {
                throw new NotFoundError('Post not found')

            }

            // he encontrado el post quiero borrar, ahora compruebo el usuario 

            return User.findById(userId)
                .catch(error => { throw new SystemError(error.message) })
                .then(user => {
                    if (!user) {
                        throw new NotFoundError('User not found')

                    }

                    // Comprueba si el usuario es el autor del post
                    if (userId.toString() !== post.author.toString()) {
                        throw new CredentialsError('Wrong Credentials')

                    }

                    // Elimina el post
                    return Post.findByIdAndDelete(postId)
                        .catch(error => { throw new SystemError(error.message) })
                        .then(deletedPost => {
                            if (!deletedPost) {
                                throw new NotFoundError('Post can\'t be deleted')

                            }

                        })
                })
        })
}

export default deletePost;
