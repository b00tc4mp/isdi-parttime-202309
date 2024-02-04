import validate from './helpers/validate.js'

import { User } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'

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
