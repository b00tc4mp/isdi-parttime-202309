const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')

const { User } = require('../data/models')

function deleteUser(userId, callback) {
    validateText(userId, 'id')
    validateFunction(callback, 'callback')

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