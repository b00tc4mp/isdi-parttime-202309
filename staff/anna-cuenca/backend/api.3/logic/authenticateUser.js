const CSV = require('../utils/CSV')
const generateId = require('../data/generateId')
const { validateText, validateFunction } = require('../utils/validators')
// aquí son 2 puntos en la ruta porque requeremos dependencias
// las dependencias se cargan en relación al módulo (cada fichero es un módulo) 
// por ejemplo authenticateUser es un módulo
// Si estoy en un móddulo y cargo otro módulo, se hace en relación a él
//authenticate está en logic y CSV en utils, por lo que tengo que usar ../

// por qué no usamos el id, porque esto es como hacer login

function authenticateUser(email, password, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero


    validateText(email, 'email')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    CSV.loadAsObject('./data/users.csv', (error, users) => {
        if (error) {
            callback(error)
            return
        }

        let user = users.find(user => user.email === email)


        if (!user) {
            callback(new Error('user not found'))
            return
        }

        if (user.password !== password) {
            callback(new Error('wrong credentials'))
            return
        }

        callback(null, user.id)





    }) //hay que hacerlo en la carpeta raiz, onde se ejecuta 
}

module.exports = authenticateUser