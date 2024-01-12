const { User } = require('../data/models')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const validate = require("./helpers/validate")

function changePasswordUser(userId, password, newPassword, againNewPassword, callback) {
    validate.id(userId, "email")
    validate.text(password, "password")
    validate.text(newPassword, "new password")
    validate.text(againNewPassword, "again password")
    validate.function(callback, "callback")

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