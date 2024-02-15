import { validate, errors } from 'com'
import { User, Post } from '../data/models.js'
const { SystemError, NotFoundError } = errors

const createPost = (userId, image, text) => {
    validate.id(userId, 'userId')
    validate.text(image, 'image')
    validate.text(text, 'text')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then((user) => {
            if (!user)
                throw new NotFoundError('user not found')

            return Post.create({ author: userId, image, text })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(() => { })
}

export default createPost