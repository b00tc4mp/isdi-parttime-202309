import { User, File } from '../data/models.js'
import { errors } from 'com'
const { SystemError, NotFoundError } = errors

async function uploadFile(userId, name, type) {
    try {
        const user = await User.findById(userId).lean()

        if (!user) {
            throw new NotFoundError('User not found. Try again')
        }

        // const { username, email, password, group, __v, role, ...cleanedUser } = user

        delete user.__v
        delete user.username
        delete user.email
        delete user.password
        delete user.group
        delete user.role

        const file = await File.create({ name: name, owner: userId, type: type, permissions: 3 })

        // const { _id, owner, permissions, __v, ...cleanedFile } = file

        delete file._id
        delete file.owner
        delete file.permissions
        delete file.__v

        return { user, file }
        // return { user: cleanedUser, file: cleanedFile }
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default uploadFile