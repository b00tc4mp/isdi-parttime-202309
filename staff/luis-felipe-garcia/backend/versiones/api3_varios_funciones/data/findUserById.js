
const { validateText, validateFunction, validateCSVFile } = require('../utils/validators')

function findUserById(id, users, callback) {
    try {
        console.log('Validating inputs')
    
        validateText(id, 'id')
        validateFunction(callback, 'callback')
    
        console.log('Inputs validated')
        let user = users.find(user => user.id === id)
        console.log('Asigning user')
        if (!user) {
            callback(new Error('id not found'))
            return
        }
        console.log('returning user')
        callback(null, user)
        console.log('User returned')
        
    } catch (error) {
        callback(error)        
    }


}

module.exports = findUserById