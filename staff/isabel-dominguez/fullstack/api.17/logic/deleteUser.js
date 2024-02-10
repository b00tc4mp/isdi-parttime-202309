import { User } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError, NotFoundError } = errors

function deleteUser(userId) {
    validate.id(userId, 'id')

    return User.findByIdAndDelete(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }

            return user
        })

}

export default deleteUser
