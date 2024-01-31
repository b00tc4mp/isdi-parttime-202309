import { validate, errors } from 'com'

import { User } from '../data/models.js'

const { SystemError, DuplicityError } = errors

function registerUser(name, email, password) {


    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.text(password, 'password')


    return User.create({ name, email, password })

        // primero ponemos el catch, para capturar errores de createUser
        .catch(error => {
            if (error.code === 11000)
                throw (new DuplicityError('User already exists'))
            // si segenera un error, lanzamos un throw, que ya nos saca de la función, no hacefalta un retun


            throw (new SystemError(error.message))
        })

        .then(user => { }) // este then no devuelve nada, simplemente retornar undefinied. Ya que en el test, el then no esera nada, solo imprime un mensaje por consola

}

export default registerUser