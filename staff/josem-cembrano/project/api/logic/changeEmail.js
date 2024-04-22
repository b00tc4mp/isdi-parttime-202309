import bcrypt from 'bcryptjs'
import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { NotFoundError, CredentialsError, SystemError, ContentError } = errors

export default async function changeEmail(userId, newEmail, newEmailConfirm, password) {
    validate.id(userId, 'userId')
    validate.email(newEmail, 'newEmail')
    validate.email(newEmailConfirm, 'newEmailConfirm')
    validate.password(password, 'password')

    try {
        if (newEmail !== newEmailConfirm)
            throw new ContentError('new email and confirm email are not the same')

        let user = await User.findById(userId)
        if (!user) {
            throw new NotFoundError('user not found')
        }

        let match
        try {
            match = await bcrypt.compare(password, user.password)
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!match)
            throw new CredentialsError('wrong password')

        user.email = newEmail
        user.newEmail = newEmailConfirm
        await user.save()
    } catch (error) {
        throw error
    }
}