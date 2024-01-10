const { User } = require('../data/models')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const { validateText, validateFunction } = require("./helpers/validators")

function changePasswordUser(userId, password, newPassword, againNewPassword, callback) {
    validateText(userId, "email")
    validateText(password, "password")
    validateText(newPassword, "new password")
    validateText(againNewPassword, "again password")
    validateFunction(callback, "callback")

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

            if (newPassword !== againNewPassword) {
                callback(new CredentialsError('wrong credentials with new password'))

                return
            }

            user.password = newPassword

            user.save()
                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = changePasswordUser