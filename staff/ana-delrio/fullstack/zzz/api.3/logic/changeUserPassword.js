const { User } = require('../data/models')
const { validateId, validateText, validateFunction } = require('./helpers/validators')
const { SystemError, ContentError, CredentialsError, NotFoundError } = require('./errors')

function changeUserPassword(userId, password, newPassword, newPasswordConfirm, callback) {
    validateId(userId, 'user id')
    validateText(password, 'password')
    validateText(newPassword, 'new password')
    validateText(newPasswordConfirm, 'new password confirm')
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