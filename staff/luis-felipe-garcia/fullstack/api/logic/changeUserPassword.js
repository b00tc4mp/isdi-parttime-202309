const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')
const { NotFoundError, SystemError, ContentError, CredentialsError } = require("../utils/errors")

function changeUserPassword(userId, newPassword, newPasswordConfirm, password, callback) {

    validateText(userId, 'user id')
    validateText(newPassword, 'new Password')
    validateText(newPasswordConfirm, 'new Password confirm')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(new SystemError(error.message))
            return
        }

        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new NotFoundError('user not found'))
            return
        }

        if (user.password !== password) {
            callback(new CredentialsError('wrong credentials'))
            return
        }

        if (newPassword !== newPasswordConfirm) {
            callback(new ContentError('Passwords do not match'))
            return
        }

        user.password = newPassword

        JSON.stringifyToFile('./data/users.json', users, error => {
            if (error) {
                callback(new SystemError(error.message))
                return
            }
            callback(null)
        })
    })
    

}

module.exports = changeUserPassword