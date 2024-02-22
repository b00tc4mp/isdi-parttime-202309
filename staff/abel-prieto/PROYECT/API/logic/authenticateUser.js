import { User } from '../data/models.js'
import bcrypt from 'bcrypt'
import { errors } from 'com'
const { SystemError, NotFoundError, CredentialsError } = errors

function authenticateUser(email, password) {
    return User.findOne({ email }).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found. Try again')
            }

            return bcrypt.compare(password, user.password)
                .catch(error => { throw new SystemError(error.message) })
                .then(match => {
                    if (!match) {
                        throw new CredentialsError('Wrong credentials. Check again')
                    }

                    return user._id
                })
        })
}

export default authenticateUser