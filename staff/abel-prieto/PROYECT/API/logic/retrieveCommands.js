import { User, Command } from '../data/models.js'
import { errors, validate } from 'com'
const { SystemError } = errors

function retrieveCommands(userId) {
    validate.id(userId, 'ID user')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                return Command.find({ name: { $in: ['help', 'exit', 'login', 'register'] } }).lean().distinct('name');
            }

            return Command.find().lean().distinct('name')
        })
}

export default retrieveCommands