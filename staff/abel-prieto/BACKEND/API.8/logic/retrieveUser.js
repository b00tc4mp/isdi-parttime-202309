const { User } = require('../data/models')
const { SystemError, NotFoundError } = require("./errors")
const { validateText, validateFunction } = require("./helpers/validators")

function retrieveUser(userId, callback) {
    validateText(userId, "user id")
    validateFunction(callback, "callback")

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
            }

            delete user.email
            delete user.password
            delete user.favs

            callback(null, user)
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrieveUser