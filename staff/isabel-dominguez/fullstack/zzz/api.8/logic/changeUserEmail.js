const validate = require('./helpers/validate')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')

const { User } = require('../data/models')

function changeUserEmail(userId, newEmail, confirmNewEmail, password, callback) {
    validate.id(userId, 'user id')
    validate.email(newEmail, 'new email')
    validate.email(confirmNewEmail, 'confirm new email')
    validate.text(password, 'password')
    validate.function(callback, 'callback')

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