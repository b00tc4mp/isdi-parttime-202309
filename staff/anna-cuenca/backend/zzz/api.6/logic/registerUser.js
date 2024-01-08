const JSON = require('../utils/JSON')
const generateId = require('../data/generateId')
const { validateText, validateFunction } = require('../utils/validators')

function registerUser(name, email, password, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero

    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
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

        JSON.stringifyToFile('./data/users.json', users, error => {
            if (error) {
                callback(error)
                return


            }
            callback(null)
        })

    }) //hay que hacerlo en la carpeta raiz, onde se ejecuta 
}

module.exports = registerUser