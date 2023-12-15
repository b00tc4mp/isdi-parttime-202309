const CSV = require('../utils/CSV')
const { validateText, validateFunction } = require('../utils/validators')

function deleteUser(userId, password, callback) {
    validateText(userId, 'id')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    CSV.loadAsObject('./data/users.csv', (error, users) => {
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

        CSV.saveFromObject('./data/users.csv', users, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null, user.id)
        })
    })
}

module.exports = deleteUser