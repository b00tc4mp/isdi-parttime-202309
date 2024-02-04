import { validate, errors } from 'com'

import { User } from '../data/models.js'
const { SystemError, NotFoundError, CredentialsError } = errors

function authenticateUser(email, password) {
    validate.email(email, 'email')
    validate.text(password, 'password')

    // first promise
    return User.findOne({ email })
        // if something goes wrong, the catch picks it up
        .catch(error => { throw new SystemError(error.message) })
        // if all goes well 
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            if (user.password !== password)
                throw new CredentialsError('wrong password')

            return user.id
        })
}

export default authenticateUser