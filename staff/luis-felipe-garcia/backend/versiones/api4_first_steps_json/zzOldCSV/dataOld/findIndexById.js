const CSV = require(('../utils/CSV'))
const { validateText, validateFunction } = require('../../utils/validators')

function findIndexById(file, id, callback) {
    try {
        validateText(id, 'id')
        validateFunction(callback, 'callback')

        CSV.loadAsObject(file, (error, documents) => {
            if (error) {
                callback(error)
                return
            }

            let index = documents.findIndex(document => document.id === id)

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