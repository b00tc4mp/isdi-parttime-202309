import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'

import { User } from '../data/models.js'

function registerUser(name, email, password, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero

    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.text(password, 'password')
    validate.function(callback, 'callback')

    const user = new User({ name, email, password })
    user.save()

        // si hago user.create({ name, email, password }) hace lo mismo que las dos líneas anteriores

        .then(() => callback(null))
        .catch(error => {
            if (error.code === 11000) {
                callback(new DuplicityError('User already exists'))
                return
            }
            callback(new SystemError(error.message))
        })

}

export default registerUser