import { User, Group } from '../data/models.js';
import bcrypt from 'bcrypt';
import { errors } from 'com';
import { validate } from 'com';

const { SystemError, DuplicityError } = errors;

async function registerUser(username, email, password) {
    try {
        // Validación de datos
        validate.text(username, 'Username');
        validate.email(email, 'Email');
        validate.password(password, 'Password');

        // Hash de la contraseña
        const hash = await bcrypt.hash(password, 5);

        // Crear el usuario
        const user = await User.create({ username, email, password: hash, group: 'localhost', role: 'user' });

        // Buscar o crear el grupo 'localhost'
        let group = await Group.findOne({ name: 'localhost' });

        // Agregar el ID del usuario al array de miembros
        group.members.push(user._id);

        // Guardar el grupo
        await group.save();

        // Devolver el usuario creado o cualquier otro valor necesario
        return user;

    } catch (error) {
        if (error.code === 11000) {
            throw new DuplicityError('Account already exists. Try again');
        }

        throw new SystemError(error.message);
    }
}

export default registerUser;
