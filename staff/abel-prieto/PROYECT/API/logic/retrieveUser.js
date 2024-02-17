import { User } from '../data/models.js'

function retrieveUser(userId) {
    return User.findById(userId).lean()
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) {
                throw new Error('user not found')
            }

            delete user._id
            delete user.__v
            delete user.email
            delete user.password

            return user
        })
}

export default retrieveUser