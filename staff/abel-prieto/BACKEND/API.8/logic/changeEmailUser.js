const { User } = require('../data/models')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const { validateText, validateFunction } = require("./helpers/validators")
 
function changeEmailUser(email, newEmail, password, callback) {
    validateText(email, "email")
    validateText(newEmail, "newEmail")
    validateText(password, "password")
    validateFunction(callback, "callback")

    User.findOne({ email: email }).lean()
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