// Importación de Módulos:
const CSV = require('../utils/CSV')
const generateId = require('../data/generateId')
const { validateText, validateFunction } = require('../utils/validators')

function registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    //Carga de Usuarios desde CSV(lectura)
    CSV.loadAsObject('./data/users.csv', (error, users) => {
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
            password
        }

        users.push(user)

        //Guardado de Usuarios en CSV(escritura)
        CSV.saveFromObject('./data/users.csv', users, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}

//Exportación del Módulo
module.exports = registerUser