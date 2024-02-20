import bcrypt from 'bcryptjs'

import { validate, errors } from 'com'

import { User } from '../data/models.js'
const { SystemError, NotFoundError, CredentialsError } = errors

export default function authenticateUser(email, password) {
    validate.email(email, 'email')
    validate.text(password, 'password')

    return (async () => {
        let user

        try {
            user = await User.findOne({ email })
        } catch (error) {
            throw new SystemError(error.message)
        }
        //si no hemos recibido usuario con ese email "NotFoundError y nos vamos"
        if (!user)
            throw new NotFoundError('user not found')
        //si hemos recibido usuario con ese email "compare/comparamos"
        let match
        try {
            match = await bcrypt.compare(password, user.password)
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!match)
            throw new CredentialsError('wrong password')

        return user.id
    })()
}