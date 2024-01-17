import { User } from '../data/models.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'
import validate from './helpers/validate.js'
 
function changeEmailUser(userId, newEmail, againNewEmail, password, callback) {
    validate.id(userId, "user id")
    validate.email(newEmail, "newEmail")
    validate.email(againNewEmail, "newEmail")
    validate.text(password, "password")
    validate.function(callback, "callback")

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

            user.email = newEmail

            user.save()
                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))
            
        })
        .catch(error => callback(new SystemError(error.message)))
    
}

export default changeEmailUser