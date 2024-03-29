import { errors, validate } from 'com'
import { User, Dog } from '../data/models.js'

const { UnauthorizedError, NotFoundError } = errors

export default async function retrievePuppies(userId, name, puppy) {
    validate.id(userId, 'userId');
    validate.text(name, 'name');
    validate.boolean(puppy, 'puppy');

    try {
        const user = await User.findById(userId);

        if (!user)
            throw new NotFoundError('user not found');

        if (!user.Admin)
            throw new UnauthorizedError('The user does not have permission to perform this action');

        if (!name) {
            throw new NotFoundError('wrong name');
        }

        if (puppy === undefined) {
            throw new NotFoundError('puppy not found');
        }

        if (puppy !== true) {
            throw new NotFoundError('puppy must be true');
        }

        const puppies = await Dog.find({ author: userId, name, puppy: true }).select('-__v').lean();

        if (!puppies || puppies.length === 0) {
            throw new NotFoundError('No puppies found');
        }

        puppies.forEach(puppy => {
            puppy.id = puppy._id.toString();
            delete puppy._id;
        });

        return puppies;

    } catch (error) {
        throw error;
    }
}