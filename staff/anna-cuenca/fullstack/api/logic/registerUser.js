const { validateText, validateFunction } = require('./helpers/validators')
const { DuplicityError, SystemError } = require('./errors')

const { User } = require('../data/models')

function registerUser(name, email, password, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero

    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    const user = new User({ name, email, password })
    user.save()

        // si hago user.create({ name, email, password }) hace lo mismo que las dos líneas anteriores

        .then(() => callback(null))
        .catch(error => {
            if (error.code === 11000) {
                callback(new DuplicityError('User already exists'))
                return
            }
            callback(new SystemError(error.message))
        })

}

module.exports = registerUser