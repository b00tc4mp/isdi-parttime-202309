
const validate = require('./helpers/validate')

// me traigo los modelos que necesito
const { User } = require('../data/models')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')

function authenticateUser(email, password, callback) {
    validate.email(email, 'email')
    validate.text(password, 'password')
    validate.function(callback, 'callback')

    // Utiliza el método findOne proporcionado por Mongoose
    User.findOne({ email })
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

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