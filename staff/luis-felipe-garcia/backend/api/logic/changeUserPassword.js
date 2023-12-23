const { User } = require('../data/models')
const { validateId, validateText, validateFunction } = require('./helpers/validators')
const { SystemError, ContentError, CredentialsError, NotFoundError } = require('./errors')

function changeUserPassword(userId, newPassword, newPasswordConfirm, password, callback) {
    validateId(userId, 'user id')
    validateText(newPassword, 'new email')
    validateText(newPasswordConfirm, 'new email confirm')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            if (newPassword !== newPasswordConfirm) {
                callback(new ContentError('new passwords do not match'))
                return
            }

            if (user.password !== password) {
                callback(new CredentialsError('wrong credentials'))
                return
            }

            user.password = newPassword
            user.save()
                .then(callback(null))
                .catch(callback(new SystemError(error.message)))

        })

        .catch(error => new SystemError(error.message))

}

module.exports = changeUserPassword