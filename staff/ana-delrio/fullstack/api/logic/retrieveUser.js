import validate from './helpers/validate.js'

import { User } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'


function retrieveUser(userId, callback) {
    validate.id(userId, 'user id')
    validate.function(callback, 'callback')

    // que el findby solo me traiga el userid con el nombre
    User.findById(userId, 'name').lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            delete user._id
            callback(null, user)


        })
        .catch(error => callback(new SystemError(error.message)))
}

export default retrieveUser