import validate from '../../../../api/logic/helpers/validate.js'
import { NotFoundError, SystemError, CredentialsError } from './errors.js'
import { User } from '../../../../../../api/data/models.js'

function authenticateUser(email, password) {
    validate.email(email, 'email')
    validate.text(password, 'password')

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