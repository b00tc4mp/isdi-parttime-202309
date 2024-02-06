import { validate, errors } from 'com';

import { User } from '../data/models.js'

const { SystemError, NotFoundError, CredentialsError } = errors

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

            if (user.password !== password)
                throw new CredentialsError('wrong password')

            return user.id
        })

}

export default authenticateUser