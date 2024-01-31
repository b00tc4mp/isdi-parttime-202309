import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, CredentialsError } = errors

function changePasswordUser(userId, password, newPassword, againNewPassword) {
    validate.id(userId, "id")
    validate.password(password, "password")
    validate.password(newPassword, "new password")
    validate.password(againNewPassword, "again password")

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }

            if (password !== user.password) {
                throw new CredentialsError('wrong credentials')
            }

            if (newPassword !== againNewPassword) {
                throw new CredentialsError('wrong credentials with new password')
            }

            user.password = newPassword

            user.save()
                .then(user => { })
                .catch(error => { throw new SystemError(error.message) })
        })
}

export default changePasswordUser