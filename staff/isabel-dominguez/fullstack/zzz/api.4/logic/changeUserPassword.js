const { validateId, validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const { User } = require('../data/models')

function changeUserPassword(userId, password, newPassword, confirmNewPassword, callback) {
    validateId(userId, 'id')
    validateText(password, 'password')
    validateText(newPassword, 'new password')
    validateText(confirmNewPassword, 'confirm new password')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            if (password !== user.password) {
                callback(new CredentialsError('wrong credentials'))

                return
            }

            if (newPassword !== confirmNewPassword) {
                callback(new CredentialsError('wrong credentials'))

                return
            }

            user.password = newPassword

            user.save()
                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = changeUserPassword