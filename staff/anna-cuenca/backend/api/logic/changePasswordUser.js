const CSV = require('../utils/CSV')
const { validateText, validateFunction } = require('../utils/validators')

function changePasswordUser(userId, password, newPassword, repeatNewPassword, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero

    validateText(userId, 'user id')
    validateText(password, 'password')
    validateText(newPassword, 'password')
    validateText(repeatNewPassword, 'password')
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

        if (user.password !== password) {
            callback(new Error('Wrong credentials'))
            return
        }

        if (user.password === newPassword) {
            callback(new Error('New password must be different from the current password'))
            return
        }

        if (repeatNewPassword !== newPassword) {
            callback(new Error('The new passwords do not match'))
            return
        }

        user.password = newPassword

        CSV.saveFromObject('./data/users.csv', users, error => {
            if (error) {
                callback(error)
                return


            }
            callback(null, user.id) // el user.id por qué nos lo traemos?
        })





    }) //hay que hacerlo en la carpeta raiz, onde se ejecuta 
}

module.exports = changePasswordUser


