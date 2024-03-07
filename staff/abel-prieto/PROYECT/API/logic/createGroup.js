import { User, Group } from '../data/models.js'
import { validate, errors } from 'com'
const { SystemError, NotFoundError, AuthorizationError, DuplicityError } = errors

function createGroup(userId, groupName) {
    validate.id(userId, 'ID user')
    validate.text(groupName, 'Group name')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')
            }

            if (user.role[0] !== 'admin') {
                throw new AuthorizationError('Authorization denied. Only ADMIN user')
            }

            return Group.create({ name: groupName })
                .catch(error => {
                    if (error.code === 11000) {
                        throw new DuplicityError('Group already exist. Try again')
                    }

                    throw new SystemError(error.message)
                })
                .then(group => { return group })
        })
}

export default createGroup