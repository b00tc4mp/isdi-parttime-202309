const validate = require('./helpers/validate')
const { NotFoundError, SystemError, CredentialsError } = require('./errors')
const { User } = require('../data/models')

function authenticateUser(email, password, callback) {
    validate.email(email, 'email')
    validate.text(password, 'password')
    validate.function(callback, 'callback')

    User.findOne({ email })
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            if (password !== user.password) {
                callback(new CredentialsError('wrong credentials'))
                return
            }

            callback(null, user.id)
        })
        .catch(error => callback(new SystemError(error.message)))

}

module.exports = authenticateUser