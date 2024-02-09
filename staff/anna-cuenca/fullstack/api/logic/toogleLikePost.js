import { validate, errors } from 'com'

import { Post, User } from '../data/models.js'

const { SystemError, NotFoundError } = errors

function toggleLikePost(userId, postId) {
    validate.id(userId, "user id")
    validate.id(postId, "post id")

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

        let index = post.likes.indexOf(userId)
        if (index !== -1) {
            post.likes.splice(index, 1)
        } else {
            post.likes.push(userId)
        }

        try {
            await post.save()
        } catch (error) {
            throw new SystemError(error.message)
        }

    })()

}



export default toggleLikePost