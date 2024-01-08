
const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')

const { User } = require('../data/models')

function authenticateUser(email, password, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero


    validateText(email, 'email')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    User.findOne({ email })
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }

            if (user.password !== password) {
                callback(new CredentialsError('wrong password'))
                return
            }

            callback(null, user.id)

        })

        .catch(error => callback(new SystemError(error.message)))


}

module.exports = authenticateUser