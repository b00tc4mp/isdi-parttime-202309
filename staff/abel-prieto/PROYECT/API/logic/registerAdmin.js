import { User, Group } from '../data/models.js'
import { validate, errors } from 'com'
const { SystemError, NotFoundError, AuthorizationError } = errors

async function registerAdmin(userId) {
    validate.id(userId)

    try {
        const user = await User.findById(userId)

        if (!user)
            throw new NotFoundError('User not found')

        if (user.role[0] !== 'admin')
            throw new AuthorizationError('Authorization denied. Only ADMIN mode')

        const admin = await User.create({ username: user.username, email: user.email, password: user.password, group: 'root', role: 'admin' })
        const group = await Group.findOne({ name: 'root' });

        group.members.push(admin._id)
        await group.save()

    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default registerAdmin