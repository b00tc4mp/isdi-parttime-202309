import { User, Group, File } from '../data/models.js'
import { validate, errors } from 'com'
const { SystemError, NotFoundError, AuthorizationError } = errors

// Revisar en User: si existe el ADMIN y el usuario a eliminar
// Eliminar TODOS los archivos que vayan asociados al user ID (owner)
// Eliminar el usuario del GROUP, si estuviera incluido en uno
// FINAL: Eliminar usuario

async function deleteUser(userId, userIdDeleted) {
    validate.id(userId, 'ID User')
    validate.id(userIdDeleted, 'ID Deleted user')

    try {
        const adminUser = await User.finById(userId).lean() // BUSCAR ADMIN

        if (!adminUser)
            throw new NotFoundError('User not found')

        if (adminUser.role[0] !== 'admin')
            throw new AuthorizationError('Authorization denied. Only ADMIN user')

        const userToDelete = await User.finById(userIdDeleted) // BUSCAR USUARIO A ELIMINAR

        if (!userToDelete)
            throw new NotFoundError('User not found')

        await File.deleteMany({ owner: userToDelete._id }) // BORRAR LOS ARCHIVOS DEL USER

        // FALTA ELIMINAR ARCHIVOS (DIRECTORIO)

        if (userToDelete.group) {
            const group = await Group.findById(userToDelete.group) // BUSCAR Y ELIMINAR SI ESTA EN ALGUN GRUPO

            if (group) {
                group.members.pull(userToDelete._id)
                await group.save()
            }
        }

        await User.findByIdAndDelete(userToDelete) // ELIMINAR USUARIO
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default deleteUser