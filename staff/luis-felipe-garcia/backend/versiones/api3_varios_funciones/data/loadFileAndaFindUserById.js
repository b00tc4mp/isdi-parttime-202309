const CSV = require(('../utils/CSV'))
const { validateText, validateFunction } = require('../utils/validators')

function loadFileAndFindUserById(id, callback) {
    validateText(id, 'id')
    validateFunction(callback, 'callback')

    CSV.loadAsObject('./data/users.csv', (error, users) => {
        if (error) {
            callback(error)
            return
        }

        let user = users.find(user => user.id === id)

        if (!user) {
            callback(new Error('id not found'))
            return
        }

        callback(null, user)

    })
}

module.exports = loadFileAndFindUserById


