import { SystemError, NotFoundError } from 'com/errors.js';
import { Sample, User } from '../data/models.js';

async function getSamples(userId) {
    try {
        if (!userId) throw new NotFoundError('User ID not provided');

        // Primero, encuentra al usuario para obtener su lista de samples favoritos
        const user = await User.findById(userId);
        if (!user) throw new NotFoundError('User not found');

        // Obtener tanto el nombre como el filePath de cada sample
        const samples = await Sample.find({}, 'name filePath bpm').lean();

        // Añade la información de si cada sample es favorito o no
        const samplesWithFavs = samples.map(sample => ({
            ...sample,
            fav: user.favSamples.includes(sample._id.toString()) // Comprueba si el sample está en los favoritos del usuario
        }));

        return samplesWithFavs; // Devuelve los samples con nombre, ruta de archivo y si es favorito o no
    } catch (error) {
        throw new SystemError(error.message);
    }
}

export default getSamples;

