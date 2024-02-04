import validate from './helpers/validate.js'
import { User } from '../../../../../../api/data/models.js'
import { SystemError, NotFoundError } from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/errors.js'


function retrieveUser(userId) {
    validate.id(userId, 'user id')

    return User.findById(userId, 'name').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')
            delete user._id
            return user
        })
}


export default retrieveUser