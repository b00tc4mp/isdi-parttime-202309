import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'

import { User } from '../data/models.js'


function changeEmailUser(userId, email, newEmail, repeatNewEmail, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero
    validate.id(userId, 'user id')

    validate.email(email, 'email')
    validate.email(newEmail, 'new email')
    validate.email(repeatNewEmail, 'new email confirm')

    validate.function(callback, 'callback')

    //hay que hacerlo en la carpeta raiz, onde se ejecuta 

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }

            if (user.email !== email) {
                callback(new CredentialsError('wrong credentials'))
                return
            }

            if (email === newEmail) {
                callback(new DuplicityError('New email must be different from the current email'))
                return
            }

            if (newEmail !== repeatNewEmail) {
                callback(new CredentialsError('The new email and confirmation email do not match'))
                return
            }

            user.email = newEmail
            user.save()

            callback(null)


        })

        .catch(error => callback(new SystemError(error.message)))
}

export default changeEmailUser