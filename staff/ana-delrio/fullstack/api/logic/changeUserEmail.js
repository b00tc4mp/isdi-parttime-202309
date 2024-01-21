import { User } from '../data/models.js'
import validate from './helpers/validate.js'
import { SystemError, ContentError, CredentialsError, NotFoundError } from './errors.js'

function changeUserEmail(userId, newEmail, newEmailConfirm, password, callback) {
    validate.id(userId, 'user id')
    validate.email(newEmail, 'new email')
    validate.email(newEmailConfirm, 'new email confirm')
    validate.text(password, 'password')
    validate.function(callback, 'callback')

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

export default changeUserEmail