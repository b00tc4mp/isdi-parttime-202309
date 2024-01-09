const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')

function changePasswordUser(userId, password, newPassword, confirmNewPassword, callback) {
    validateText(userId, 'id')
    validateText(password, 'password')
    validateText(newPassword, 'new password')
    validateText(confirmNewPassword, 'confirm new password')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(error)

            return
        }

        let user = users.find(user => user.id === userId)

        if (!user) {
            callback(new Error('user not found'))

            return
        }

        if (password !== user.password) {
            callback(new Error('wrong credencials'))

            return
        }

        if (newPassword !== confirmNewPassword) {
            callback(new Error('new password and new password confirm does not match'))

            return
        }

        if (newPassword === user.password) {
            callback(new Error('new password must be diferent'))

            return
        }

        user.password = newPassword

        JSON.stringifyToFile('./data/users.json', users, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null, user.id)
        })
    })
}

module.exports = changePasswordUser