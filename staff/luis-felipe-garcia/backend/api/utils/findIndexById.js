const CVS = require(('./CSV'))
const { validateText, validateFunction } = require('./validators')

function findIndexById(file, id, callback) {
    try {
        validateText(id, 'id')
        validateFunction(callback, 'callback')

        CVS.loadAsObject(file, (error, documents) => {
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