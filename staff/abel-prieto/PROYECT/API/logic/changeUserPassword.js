import bcrypt from 'bcrypt'
import { User } from '../data/models.js'
import { validate, errors } from 'com'
const { SystemError, NotFoundError, CredentialsError } = errors

function changeUserPassword(userId, password, newPassword, againNewPassword) {
    validate.id(userId, 'ID user')
    validate.password(password, 'Password')
    validate.password(newPassword, 'New password')
    validate.password(againNewPassword, 'Repeat new password')

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

                    if (newPassword !== againNewPassword) {
                        throw new CredentialsError('Wrong credentials with new password')
                    }

                    return bcrypt.hash(newPassword, 5)
                        .catch(error => { throw new SystemError(error.message) })
                        .then(hash => {

                            user.password = hash

                            return user.save()
                                .catch(error => { throw new SystemError(error.message) })
                        })


                })

        })

}

export default changeUserPassword