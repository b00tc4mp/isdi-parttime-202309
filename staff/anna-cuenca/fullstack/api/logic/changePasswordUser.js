const { validateText, validateFunction, validateId } = require('./helpers/validators')

const { User } = require('../data/models')

const { SystemError, NotFoundError, CredentialsError, DuplicityError } = require('./errors')

function changePasswordUser(userId, password, newPassword, repeatNewPassword, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero

    validateId(userId, 'user id')
    validateText(password, 'password')
    validateText(newPassword, 'password')
    validateText(repeatNewPassword, 'password')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }
            if (user.password !== password) {
                callback(new CredentialsError('Wrong Credentials'))
                return
            }

            if (password === newPassword) {
                callback(new DuplicityError('New password must be different from current one'))
                return
            }

            if (newPassword !== repeatNewPassword) {
                callback(new CredentialsError('The new email and the confirmation password do not match'))
                return
            }
            user.password = newPassword

            user.save()

            callback(null)
        })

        .catch(error => callback(new SystemError(error.message)))

}

module.exports = changePasswordUser


