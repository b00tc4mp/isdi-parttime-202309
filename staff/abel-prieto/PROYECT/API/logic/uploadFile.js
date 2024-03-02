import { User, File } from '../data/models.js'
import { errors } from 'com'
const { SystemError, NotFoundError, DuplicityError } = errors

async function uploadFile(userId, originalname, mimetype) {
    try {
        const user = await User.findById(userId).lean()

        if (!user) {
            throw new NotFoundError('User not found. Try again')
        }

        delete user.__v
        delete user.username
        delete user.email
        delete user.password
        delete user.group
        delete user.role

        const file = await File.create({ name: originalname, owner: userId, type: mimetype, permissions: 3 })

        return { user, file }
    } catch (error) {
        if (error.code === 11000) {
            throw new DuplicityError('Error: file already saved... Try again')
        }

        throw new SystemError(error.message)
    }
}

export default uploadFile