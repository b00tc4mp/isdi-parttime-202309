const CVS = require(('../utils/CSV'))
const { validateText, validateFunction } = require('../utils/validators')

function findIndexById(id, callback) {
    try {
        validateText(id, 'id')
        validateFunction(callback, 'callback')

        CVS.loadAsObject('./data/users.csv', (error, users) => {
            if (error) {
                callback(error)
                return
            }

            let index = users.findIndex(user => user.id === id)

            if (!index) {
                callback(new Error('id not found'))
                return
            }
            callback(null, index)
        })

    } catch (error) {
        callback(error)
    }
}

module.exports = findIndexById