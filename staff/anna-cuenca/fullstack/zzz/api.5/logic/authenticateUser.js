import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'

import { User } from '../data/models.js'

function authenticateUser(email, password) {



    validate.email(email, 'email')
    validate.text(password, 'password')


    return User.findOne({ email })
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')



            if (user.password !== password)
                throw new CredentialsError('wrong password')



            return user.id

        })

}

export default authenticateUser