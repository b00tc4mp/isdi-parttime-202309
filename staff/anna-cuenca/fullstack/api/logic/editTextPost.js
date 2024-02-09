import { validate, errors } from 'com'

import { Post, User } from '../data/models.js'

const { NotFoundError, CredentialsError, SystemError } = errors

function editTextPost(userId, postId, text) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.text(text, 'text')


    return (async () => {

        let user

        try {
            user = await User.findById(userId)
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!user)
            throw new NotFoundError('User not found')

        let post

        try {
            post = await Post.findById(postId)
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!post)
            throw new NotFoundError('Post not found')

        if (userId.toString() !== post.author.toString()) {
            throw new CredentialsError('Wrong Credentials')

        }

        post.text = text

        try {
            await post.save()
        } catch (error) {
            throw new SystemError(error.message)
        }
    })()
}

export default editTextPost