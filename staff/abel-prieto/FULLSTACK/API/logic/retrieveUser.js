import { User } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'
import validate from './helpers/validate.js'

function retrieveUser(userId, callback) {
    validate.id(userId, "user id")
    validate.function(callback, "callback")

    User.findById(userId, 'name').lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
            }

            delete user._id
            callback(null, user)
        })
        .catch(error => callback(new SystemError(error.message)))
}

export default retrieveUser