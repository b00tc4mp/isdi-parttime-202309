const validate = require('./helpers/validate')

const { User } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')

function retrieveUser(userId, callback) {
    validate.id(userId, 'user id')
    validate.function(callback, 'callback')

    User.findById(userId)
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
