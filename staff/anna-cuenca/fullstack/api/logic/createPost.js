
import { validate, errors } from 'com'

import { Post, User } from '../data/models.js'

const { SystemError, NotFoundError } = errors

function createPost(userId, image, text) {
    validate.id(userId, 'user id')
    validate.text(image, 'image')
    validate.text(text, 'text')

    return (async () => {

        let user

        try {
            user = await User.findById(userId).lean()
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!user)
            throw new NotFoundError('User not found')

        try {

            await Post.create({ author: userId, image, text })

        } catch (error) {
            throw new SystemError(error.message)
        }
    })()


}

export default createPost
