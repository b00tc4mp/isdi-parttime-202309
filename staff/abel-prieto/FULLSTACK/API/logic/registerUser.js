import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, DuplicityError } = errors

function registerUser(name, email, password) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.password(password, 'password')

    // const user = new User({ name: name, email: email, password: password })
    // user.save()

    return User.create({ name, email, password })
        .catch(error => {
            if (error.code === 11000) {
                throw new DuplicityError('user already exist')
            }

            throw new SystemError(error.message)
        })
        .then(user => { }) // Le pasamos un objeto vacío para indicar a la promesa que no hay nada que devolver fuera!

}

export default registerUser