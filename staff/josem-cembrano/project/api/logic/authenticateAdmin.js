import bcrypt from 'bcryptjs'
import { validate, errors } from 'com'
import { Admin } from '../data/models.js'

const { SystemError, NotFoundError, CredentialsError } = errors

export default function authenticateAdmin(email, password) {
    validate.email(email, 'email')
    validate.password(password, 'password')

    return (async () => {
        let admin

        try {
            admin = await Admin.findOne({ email })
        } catch (error) {
            throw new SystemError(error.message)
        }
        if (!admin)
            throw new NotFoundError('admin not found')

        let passwordMatch
        try {
            passwordMatch = await bcrypt.compare(password, admin.password)
        } catch (error) {
            throw new SystemError(error.message)
        }
        if (!passwordMatch)
            throw new CredentialsError('wrong password')

        return admin.id
    })()
}