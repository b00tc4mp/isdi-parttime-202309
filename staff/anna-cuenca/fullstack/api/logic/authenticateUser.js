const validate = require('./helpers/validate')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')

const { User } = require('../data/models')

function authenticateUser(email, password, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero


    validate.email(email, 'email')
    validate.text(password, 'password')
    validate.function(callback, 'callback')

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

    //hay que hacerlo en la carpeta raiz, onde se ejecuta 
}

module.exports = authenticateUser