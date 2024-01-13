const { validateId, validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')

const { User } = require('../data/models')

function changeEmailUser(userId, email, newEmail, confirmNewEmail, callback) {
    validateId(userId, 'id')
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

            if (email !== user.email) {
                callback(new CredentialsError('wrong credentials'))

                return
            }

            if (newEmail !== confirmNewEmail) {
                callback(new CredentialsError('wrong credentials'))

                return
            }

            user.email = newEmail

            user.save()
                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = changeEmailUser