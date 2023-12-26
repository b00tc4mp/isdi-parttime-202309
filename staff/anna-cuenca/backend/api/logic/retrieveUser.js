const { validateText, validateFunction, validateId } = require('./helpers/validators')
const { User } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors.js')

function retrieveUser(userId, callback) {
    validateId(userId, 'user id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }

            callback(null, { name: user.name })
        })
        .catch(error => callback(new SystemError(error.message)))

}

module.exports = retrieveUser