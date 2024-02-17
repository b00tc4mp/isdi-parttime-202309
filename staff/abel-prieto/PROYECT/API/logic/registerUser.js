import { User } from '../data/models.js'
import bcrypt from 'bcrypt'

function registerUser(username, email, password) {

    return bcrypt.hash(password, 5)
        .catch(error => { throw new Error(error.message) })
        .then(hash => {
            return User.create({ username, email, password: hash, group: 'localhost' })
                .catch(error => {
                    if (error.code === 11000) {
                        throw new Error('duplicity error')
                    }

                    throw new Error(error.message)
                })
                .then(user => { })
        })
}

export default registerUser