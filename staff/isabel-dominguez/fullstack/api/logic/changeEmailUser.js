const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')

const { User } = require('../data/models')

function changeEmailUser(userId, email, newEmail, confirmNewEmail, callback) {
    validateText(userId, 'id')
    validateText(email, 'email')
    validateText(newEmail, 'new email')
    validateText(confirmNewEmail, 'confirm new email')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            if (user.email !== email) {
                callback(new CredentialsError('wrong email'))
                return
            }

            if (newEmail !== confirmNewEmail) {
                callback(new CredentialsError('new email and confirm new email do not match'))
                return
            }

            user.email = newEmail

            return user.save()
        })
        .then(updatedUser => {
            if (updatedUser) {
                callback(null, updatedUser)
            }
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = changeEmailUser