
const validate = require('./helpers/validate')
const { DuplicityError, SystemError } = require('./errors')

const { User } = require('../data/models')

function registerUser(name, email, password, callback) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.text(password, 'password')
    validate.function(callback, 'callback')

    // const user = new User({ name, email, password })

    // Se utiliza el método create del modelo User para intentar crear un nuevo usuario
    User.create({ name, email, password })
        // Si la creación tiene éxito, se llama a callback(null) indicando que no hay errores
        .then(() => callback(null))
        // Si hay algún error, se maneja en el bloque catch
        .catch(error => {
            // Si el código de error es 11000, se interpreta como un error de duplicidad 
            // el código de error 11000 en MongoDB es un código específico que indica una violación de un índice único
            if (error.code === 11000) {
                callback(new DuplicityError('user already exists'))

                return
            }
            // Si el error no es de duplicidad
            callback(new SystemError(error.message))
        })
}

module.exports = registerUser