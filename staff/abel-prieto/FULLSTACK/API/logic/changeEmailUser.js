import { User } from '../data/models.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'
import validate from './helpers/validate.js'
 
function changeEmailUser(userId, newEmail, againNewEmail, password) {
    validate.id(userId, "user id")
    validate.email(newEmail, "newEmail")
    validate.email(againNewEmail, "newEmail")
    validate.text(password, "password")

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }

            if (newEmail !== againNewEmail) {
                throw new CredentialsError('new email and confirm are not the same')
            }

            if (password !== user.password) {
                throw new CredentialsError('wrong credentials')
            }

            user.email = newEmail

            user.save()
                .then(user => { })
                .catch(error => { throw new SystemError(error.message) })
            
        })
}

export default changeEmailUser