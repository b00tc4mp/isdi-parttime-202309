const CSV = require('../utils/JSON')
const generateId = require('../data/generateId')
const { validateText, validateFunction } = require('../utils/validators')

function registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'passaword')
    validateFunction(callback, 'callback')

    CSV.parseFromFile('./data/users.json', (error, users) => {

        if (error) {
            callback(error)

            return
        }

        let user = users.find(user => user.email === email)

        if (user) {

            callback(new Error('user already exists'))

            return

        }

        user = {
            id: generateId(),
            name,
            email,
            password,
            favs: []
        }

        users.push(user)

        CSV.stringifyToFile('./data/users.json', users, error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)


        })
    })
}

module.exports = registerUser