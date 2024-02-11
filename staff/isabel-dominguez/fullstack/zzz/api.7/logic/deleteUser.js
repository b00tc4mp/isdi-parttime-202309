const validate = require('./helpers/validate')
const { SystemError, NotFoundError } = require('./errors')

const { User } = require('../data/models')

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

module.exports = deleteUser