const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const { User } = require('../data/models')

function changePasswordUser(userId, password, newPassword, confirmNewPassword, callback) {
    validateText(userId, 'id')
    validateText(password, 'password')
    validateText(newPassword, 'new password')
    validateText(confirmNewPassword, 'confirm new password')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'));
                return
            }

            if (user.password !== password) {
                callback(new CredentialsError('wrong password'));
                return
            }

            if (newPassword !== confirmNewPassword) {
                callback(new CredentialsError('new password and confirm new password do not match'));
                return
            }

            user.password = newPassword

            return user.save()
        })
        .then(updatedUser => {
            if (updatedUser) {
                callback(null, updatedUser)
            }
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = changePasswordUser