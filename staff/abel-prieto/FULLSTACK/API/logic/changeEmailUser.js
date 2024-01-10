const { User } = require('../data/models')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const { validateText, validateFunction } = require("./helpers/validators")
 
function changeEmailUser(userId, newEmail, againNewEmail, password, callback) {
    validateText(userId, "user id")
    validateText(newEmail, "newEmail")
    validateText(againNewEmail, "newEmail")
    validateText(password, "password")
    validateFunction(callback, "callback")

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