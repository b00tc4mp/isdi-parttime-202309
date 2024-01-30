import { validate, errors } from 'com'
import { User } from '../data/models.js'
const { NotFoundError, SystemError, CredentialsError } = errors

function authenticateUser(email, password) {
    validate.email(email, 'email')
    validate.password(password, 'password')

    return User.findOne({ email })
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            if (password !== user.password) {
                throw new CredentialsError('wrong credentials')
            }

            return user.id
        })
}

export default authenticateUser