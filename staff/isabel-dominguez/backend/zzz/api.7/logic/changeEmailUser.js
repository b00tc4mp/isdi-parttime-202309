const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')

function changeEmailUser(userId, email, newEmail, confirmNewEmail, callback) {
    validateText(userId, 'id')
    validateText(email, 'email')
    validateText(newEmail, 'new email')
    validateText(confirmNewEmail, 'confirm new email')
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

        if (email !== user.email) {
            callback(new Error('wrong credencials'))

            return
        }

        if (newEmail !== confirmNewEmail) {
            callback(new Error('new email and new email confirm does not match'))

            return
        }

        if (newEmail === user.email) {
            callback(new Error('new email must be diferent'))

            return
        }

        user.email = newEmail

        JSON.stringifyToFile('./data/users.json', users, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null, user.id)
        })
    })
}

module.exports = changeEmailUser