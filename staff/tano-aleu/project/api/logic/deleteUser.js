import { User } from '../data/models.js';
import { validate, errors } from 'com';
const { SystemError, NotFoundError } = errors;

function deleteUser(userId) {
    validate.id(userId, 'user id');

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message); })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found');

            // Eliminar el usuario encontrado
            return User.findByIdAndDelete(userId)
                .catch(error => { throw new SystemError(error.message); })
                .then(deletedUser => {
                    if (!deletedUser)
                        throw new NotFoundError('user not found after attempting to delete');
                    // Puedes realizar acciones adicionales aquí si es necesario, después de eliminar el usuario
                });
        });
}

export default deleteUser;
