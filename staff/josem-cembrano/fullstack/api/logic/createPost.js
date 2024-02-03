import validate from './helpers/validate.js'
import { User, Post } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'

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