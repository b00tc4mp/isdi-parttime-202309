const { User } = require('../data/models')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const validate = require("./helpers/validate")
 
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

module.exports = changeEmailUser