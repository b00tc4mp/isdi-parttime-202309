import bcrypt from 'bcryptjs'
import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { NotFoundError, CredentialsError } = errors

export default async function changePassword(userId, password, newPassword, newPasswordConfirm) {
    validate.id(userId, 'userid')
    validate.password(password, 'password')
    validate.password(newPassword, 'newPassword')
    validate.password(newPasswordConfirm, 'newPasswordConfirm')

    try {
        const user = await User.findById(userId)
        if (!user) {
            throw new NotFoundError('User not found')
        }

        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            throw new CredentialsError('Wrong credentials')
        }

        if (newPassword !== newPasswordConfirm) {
            throw new CredentialsError('New passwords do not match')
        }

        const hash = await bcrypt.hash(newPassword, 7)
        user.password = hash
        await user.save()
    } catch (error) {
        throw error
    }
}