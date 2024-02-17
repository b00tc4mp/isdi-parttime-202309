import { User } from '../data/models.js'
import bcrypt from 'bcrypt'

function authenticateUser(email, password) {
    return User.findOne({ email }).lean()
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) {
                throw new Error('user not found')
            }

            return bcrypt.compare(password, user.password)
                .catch(error => { throw new Error(error.message) })
                .then(match => {
                    if (!match) {
                        throw new Error('wrong credentials')
                    }

                    return user._id
                })
        })
}

export default authenticateUser