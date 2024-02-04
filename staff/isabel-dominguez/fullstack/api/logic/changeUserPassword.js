import { User } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError, NotFoundError, CredentialsError } = errors

function changeUserPassword(userId, password, newPassword, confirmNewPassword) {
    validate.id(userId, 'id')
    validate.text(password, 'password')
    validate.text(newPassword, 'new password')
    validate.text(confirmNewPassword, 'confirm new password')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }

            if (password !== user.password) {
                throw new CredentialsError('wrong credentials')
            }

            if (newPassword !== confirmNewPassword) {
                throw new CredentialsError('wrong credentials with confirm new password')
            }

            user.password = newPassword

            user.save()
                .then(user => { })
                .catch(error => { throw new SystemError(error.message) })
        })

}

export default changeUserPassword