const { User } = require('../data/models')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const { validateText, validateFunction } = require("./helpers/validators")

function changePasswordUser(email, password, newPassword, callback) {
    validateText(email, "email")
    validateText(password, "password")
    validateText(newPassword, "new password")
    validateFunction(callback, "callback")

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            if (password !== user.password) {
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

module.exports = changePasswordUser