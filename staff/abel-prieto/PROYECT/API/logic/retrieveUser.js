import { User } from '../data/models.js'
import { errors, validate } from 'com'
const { SystemError, NotFoundError } = errors

function retrieveUser(userId) {
    validate.id(userId, 'ID user')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found. Try again')
            }

            delete user._id
            delete user.__v
            delete user.email
            delete user.password

            // USERNAME - GROUP - ROLE 
            return user
        })
}

export default retrieveUser