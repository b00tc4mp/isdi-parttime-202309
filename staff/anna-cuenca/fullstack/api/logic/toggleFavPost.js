import { validate, errors } from 'com'

import { Post, User } from '../data/models.js'

const { NotFoundError, SystemError } = errors



function toggleFavPost(userId, postId) {
    validate.id(postId, "post id")
    validate.id(userId, "user id")

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
            post = await Post.findById(postId).lean()
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!post)
            throw new NotFoundError('Post not found')


        const index = user.favs.findIndex(postObjectId => postObjectId.toString() === postId)

        if (index < 0) {
            user.favs.push(postId);
        } else {
            user.favs.splice(index, 1);
        }

        try {
            await user.save()
        } catch (error) {
            throw new SystemError(error.message)
        }

    })()
}

export default toggleFavPost;
