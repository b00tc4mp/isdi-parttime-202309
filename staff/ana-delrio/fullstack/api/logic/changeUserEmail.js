const { User } = require('../data/models')
const { validateId, validateText, validateFunction } = require('./helpers/validators')
const { SystemError, ContentError, CredentialsError, NotFoundError } = require('./errors')

function changeUserEmail(userId, newEmail, newEmailConfirm, password, callback) {
    validateId(userId, 'user id')
    validateText(newEmail, 'new email')
    validateText(newEmailConfirm, 'new email confirm')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            if (newEmail !== newEmailConfirm) {
                callback(new ContentError('new emails do not match'))
                return
            }

            if (user.password !== password) {
                callback(new CredentialsError('wrong credentials'))
                return
            }

            user.email = newEmail
            user.save()
                .then(callback(null))
                .catch(callback(new SystemError(error.message)))

        })

        .catch(error => new SystemError(error.message))

}

module.exports = changeUserEmail