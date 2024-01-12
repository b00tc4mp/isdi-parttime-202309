const { User } = require('../data/models')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const validate= require('./helpers/validate')

function authenticateUser(email, password, callback) {
    validate.email(email, 'name')
    validate.text(password, 'password')
    validate.function(callback, 'callback')

    User.findOne({ email })
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
                
                return
            }

            if (user.password !== password) {
                callback(new CredentialsError('wrong credentials'))

                return
            }

            callback(null, user.id)
        })
        .catch(error => callback(new SystemError(error.message)))
    
}

module.exports = authenticateUser