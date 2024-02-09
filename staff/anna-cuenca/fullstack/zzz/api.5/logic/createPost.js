import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'

import { Post, User } from '../data/models.js'

function createPost(userId, image, text) {
    validate.id(userId, 'user id')
    validate.text(image, 'image')
    validate.text(text, 'text')


    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')


            return Post.create({ author: userId, image, text })

                .catch(error => { throw new SystemError(error.message) })


        })
        .then(() => { })



}

export default createPost
