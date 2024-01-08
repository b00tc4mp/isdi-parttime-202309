
const { validateText, validateFunction, validateId } = require('./helpers/validators')

const { User } = require('../data/models')

const { SystemError, NotFoundError, CredentialsError, DuplicityError } = require('./errors')

function changeEmailUser(userId, email, newEmail, repeatNewEmail, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero
    validateId(userId, 'user id')

    validateText(email, 'email')
    validateText(newEmail, 'new email')
    validateText(repeatNewEmail, 'new email confirm')

    validateFunction(callback, 'callback')

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

module.exports = changeEmailUser