import validate from './helpers/validate.js'

import { User } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'

function deleteUser(userId, callback) {
    validate.id(userId, 'id')
    validate.function(callback, 'callback')

    User.findByIdAndDelete(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            callback(null)
        })
        .catch(error => callback(new SystemError(error.message)))
}

export default deleteUser