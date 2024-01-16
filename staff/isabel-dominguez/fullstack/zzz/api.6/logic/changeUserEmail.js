const { validateId, validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')

const { User } = require('../data/models')

function changeUserEmail(userId, newEmail, confirmNewEmail, password, callback) {
    validateId(userId, 'id')
    validateText(newEmail, 'new email')
    validateText(confirmNewEmail, 'confirm new email')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            if (newEmail !== confirmNewEmail) {
                callback(new CredentialsError('new email must be same to confirm email'))

                return
            }

            if (password !== user.password) {
                callback(new CredentialsError('wrong credencials'))

                return
            }

            user.email = newEmail

            user.save()
                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = changeUserEmail