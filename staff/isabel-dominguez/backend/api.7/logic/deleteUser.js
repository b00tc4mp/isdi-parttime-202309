const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')

function deleteUser(userId, password, callback) {
    validateText(userId, 'id')
    validateText(password, 'password')
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

        if (user.password !== password) {
            callback(new Error('wrong credencial'))

            return
        }

        const index = users.indexOf(user)

        users.splice(index, 1)

        JSON.stringifyToFile('./data/users.json', users, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null, user.id)
        })
    })
}

module.exports = deleteUser