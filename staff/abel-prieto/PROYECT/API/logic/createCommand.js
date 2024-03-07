import { validate, errors } from 'com'
import { User, Command } from '../data/models.js'
const { SystemError, NotFoundError, AuthorizationError, DuplicityError } = errors

function createCommand(userId, commandName) {
    validate.id(userId, 'ID user')
    validate.text(commandName, 'Command name')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')
            }

            if (user.role[0] !== 'admin') {
                throw new AuthorizationError('Authorization denied. Only ADMIN user')
            }

            return Command.create({ name: commandName })
                .catch(error => {
                    if (error.code === 11000) {
                        throw new DuplicityError('Command already exist. Try again')
                    }

                    throw new SystemError(error.message)
                })
                .then(command => { return command })
        })
}

export default createCommand