import bcrypt from 'bcrypt'
import { User } from '../data/models.js'
import { validate, errors } from 'com'
const { SystemError, NotFoundError, CredentialsError } = errors

function changeUserEmail(userId, newEmail, password, againPassword) {
    validate.email(newEmail, 'New email')
    validate.password(password, 'Password')
    validate.password(againPassword, 'Repeat password')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found. Try again')
            }

            return bcrypt.compare(password, user.password)
                .catch(error => { throw new SystemError(error.message) })
                .then(match => {
                    if (!match) {
                        throw new CredentialsError('Wrong credentials. Try again')
                    }

                    if (password !== againPassword) {
                        throw new CredentialsError('Passwords do not match. Try again')
                    }

                    user.email = newEmail

                    return user.save()
                        .catch(error => { throw new SystemError(error.message) })
                })
        })
}

export default changeUserEmail