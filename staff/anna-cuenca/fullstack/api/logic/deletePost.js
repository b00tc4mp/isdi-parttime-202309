import { validate, errors } from 'com'


import { Post, User } from '../data/models.js'

const { NotFoundError, CredentialsError, SystemError } = errors

function deletePost(userId, postId) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')

    return (async () => {
        let post

        try {
            post = await Post.findById(postId)
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!post)
            throw new NotFoundError('Post not found')

        let user

        try {
            user = await User.findById(userId)
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!user)
            throw new NotFoundError('User not found')

        if (userId.toString() !== post.author.toString()) {
            throw new CredentialsError('Wrong Credentials')

        }

        let deletedPost

        try {
            deletedPost = await Post.findByIdAndDelete(postId)
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!deletedPost)
            throw new NotFoundError('Post can\'t be deleted')

    })()

}

export default deletePost
