const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')

const { User } = require('../data/models')

function deleteUser(userId, password, callback) {
    validateText(userId, 'id')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    User.findByIdAndDelete(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            callback(null, user)
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = deleteUser