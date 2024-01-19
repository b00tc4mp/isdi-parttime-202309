const { validateFunction, validateId } = require('./helpers/validators')

const { User } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')

const retrieveUser = (userId, callback) => {
    validateFunction(callback, 'callback')
    validateId(userId, 'userId')

    User.findById(userId).lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            callback(null, { name: user.name })
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrieveUser