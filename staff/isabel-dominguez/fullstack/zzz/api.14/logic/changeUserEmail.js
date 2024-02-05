import { User } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError, NotFoundError, CredentialsError } = errors

function changeUserEmail(userId, newEmail, confirmNewEmail, password) {
    validate.id(userId, 'user id')
    validate.email(newEmail, 'new email')
    validate.email(confirmNewEmail, 'confirm new email')
    validate.text(password, 'password')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }

            if (newEmail !== confirmNewEmail) {
                throw new CredentialsError('new email and confirm are not the same')
            }

            if (password !== user.password) {
                throw new CredentialsError('wrong credencials')
            }

            user.email = newEmail

            user.save()
                .then(user => { })
                .catch(error => { throw new SystemError(error.message) })
        })

}

export default changeUserEmail