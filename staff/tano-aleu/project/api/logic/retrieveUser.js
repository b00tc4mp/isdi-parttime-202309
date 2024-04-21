import { validate, errors } from 'com'

import { User } from '../data/models.js'

const { SystemError, NotFoundError } = errors

function retrieveUser(userId) {
    validate.id(userId, 'user id');

    return (async () => {
        let user;

        try {
            user = await User.findById(userId, 'name _id').lean(); // Solicita explícitamente _id además de name
        } catch (error) {
            throw new SystemError(error.message);
        }

        if (!user) {
            throw new NotFoundError('user not found');
        }

        // Ajusta el objeto user para renombrar _id a id para su uso en el frontend
        const result = {
            id: user._id.toString(), // Asegúrate de convertir _id a string si es necesario
            name: user.name
        };

        return result;
    })();
}


export default retrieveUser