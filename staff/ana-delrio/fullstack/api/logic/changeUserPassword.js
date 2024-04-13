import { User } from '../data/models.js'
import validate from './helpers/validate.js'
import { SystemError, ContentError, CredentialsError, NotFoundError } from './errors.js'

function changeUserPassword(userId, password, newPassword, newPasswordConfirm, callback) {
    validate.id(userId, 'user id')
    validate.text(password, 'password')
    validate.text(newPassword, 'new password')
    validate.text(newPasswordConfirm, 'new password confirm')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            if (newPassword !== newPasswordConfirm) {
                callback(new ContentError('new passwords do not match'))
                return
            }

            if (user.password !== password) {
                callback(new CredentialsError('wrong credentials'))
                return
            }

            user.password = newPassword
            user.save()
                .then(callback(null))
                .catch(callback(new SystemError(error.message)))
        })

        .catch(error => new SystemError(error.message))



}
export default changeUserPassword