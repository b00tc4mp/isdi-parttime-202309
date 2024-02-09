import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'

import { User } from '../data/models.js'

function retrieveUser(userId) {
    validate.id(userId, 'user id')


    return User.findById(userId, 'name').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')
            delete user._id

            return user
        })

}

export default retrieveUser