import validate from './helpers/validate.js'

import { User } from '../data/models.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'

function changeUserPassword(userId, password, newPassword, confirmNewPassword, callback) {
    validate.id(userId, 'id')
    validate.text(password, 'password')
    validate.text(newPassword, 'new password')
    validate.text(confirmNewPassword, 'confirm new password')
    validate.function(callback, 'callback')

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

            if (newPassword !== confirmNewPassword) {
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

export default changeUserPassword