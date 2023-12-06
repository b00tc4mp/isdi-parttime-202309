const CVS = require(('../utils/CSV'))
const { validateText, validateFunction } = require('../utils/validators')

function findUserById(id, callback) {
    validateText(id, 'id')
    validateFunction(callback, 'callback')

    CVS.loadAsObject('./data/users.csv', (error, users) => {
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

module.exports = findUserById


