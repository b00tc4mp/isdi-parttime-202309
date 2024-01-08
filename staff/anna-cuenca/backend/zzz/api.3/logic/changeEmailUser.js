const CSV = require('../utils/CSV')
const { validateText, validateFunction } = require('../utils/validators')

function changeEmailUser(userId, email, newEmail, repeatNewEmail, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero
    validateText(userId, 'user id')

    validateText(email, 'email')
    validateText(newEmail, 'new email')
    validateText(repeatNewEmail, 'new email confirm')

    validateFunction(callback, 'callback')

    CSV.loadAsObject('./data/users.csv', (error, users) => {
        if (error) {
            callback(error)
            return
        }

        let user = users.find(user => user.id === userId) // comprobamos que el usuario esté en la base de datos


        if (!user) {
            callback(new Error('user not found'))
            return
        }

        if (user.email !== email) {
            callback(new Error('Wrong credentials'))
            return
        }

        if (user.email === newEmail) {
            callback(new Error('New email must be different from the current email'))
            return
        }

        if (repeatNewEmail !== newEmail) {
            callback(new Error('The new emails do not match'))
            return
        }

        user.email = newEmail

        CSV.saveFromObject('./data/users.csv', users, error => {
            if (error) {
                callback(error)
                return


            }
            callback(null, user.id) // el user.id por qué nos lo traemos? Yo lo uso para mensaje
        })





    }) //hay que hacerlo en la carpeta raiz, onde se ejecuta 
}

module.exports = changeEmailUser