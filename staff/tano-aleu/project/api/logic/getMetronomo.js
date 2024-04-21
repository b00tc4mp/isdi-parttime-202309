import { SystemError } from 'com/errors.js';
import { Metronomo } from '../data/models.js';

function getMetronomo() {
    return (async () => {
        try {
            // Obtener tanto el nombre como el filePath de cada sample
            const metronomo = await Metronomo.find({}, 'name filePath bpm').lean();
            return metronomo; // Devuelve los samples con nombre y ruta de archivo
        } catch (error) {
            throw new SystemError(error.message);
        }
    })();
}

export default getMetronomo;