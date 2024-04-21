import bcrypt from 'bcryptjs'

import { validate, errors } from 'com'

import { User } from '../data/models.js'

const { SystemError, NotFoundError, CredentialsError } = errors

function authenticateUser(email, password) {
    validate.email(email, 'email')
    validate.password(password, 'password')

    return (async () => {

        email = email.toLowerCase();

        let user

        try {
            user = await User.findOne({ email: email.toLowerCase() });
        } catch (error) {
            throw new SystemError(error.message);
        }

        if (!user)
            throw new NotFoundError('user not found')

        let match

        try {
            match = await bcrypt.compare(password.trim(), user.password);
        } catch (error) {
            throw new SystemError(error.message);
        }

        if (!match)
            throw new CredentialsError('wrong password')

        return user.id


    })()

}

export default authenticateUser