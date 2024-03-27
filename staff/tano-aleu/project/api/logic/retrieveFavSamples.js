import { validate, errors } from 'com';
import { User, Sample } from '../data/models.js';

const { SystemError, NotFoundError } = errors;

function retrieveFavSamples(userId) {
    validate.id(userId, 'user id');

    // Encuentra al usuario por ID y obtiene sus samples favoritos.
    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError('user not found');

            // Utiliza el campo favs (o el nombre que hayas elegido para los favoritos en tu modelo de usuario) para encontrar los samples favoritos.
            return Sample.find({ _id: { $in: user.favSamples } }).select('-__v').lean()
                .then(samples => {
                    // Ajusta cada sample para la respuesta.
                    samples.forEach(sample => {
                        sample.id = sample._id.toString();
                        delete sample._id;
                    });

                    return samples;
                });
        })
        .catch(error => {
            throw error instanceof mongoose.Error.CastError ? new NotFoundError('user not found') : new SystemError(error.message);
        });
}

export default retrieveFavSamples;
