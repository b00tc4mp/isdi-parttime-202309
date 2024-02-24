import { User } from "../data/models.js"
import { errors } from "com"
const { SystemError, NotFoundError} = errors

function retrieveGuest() {
    return User.findOne({ email: 'guest@hiinit.com' }).lean()
        .catch(error => { throw new SystemError(error.message)})
        .then(guest => {
            if (!guest) {
                throw new NotFoundError('Guest not found. Try again')
            }

            // USERNAME - TYPE - ROLE
            delete guest._id
            delete guest.__v
            delete guest.email
            delete guest.password

            return guest
        })
}

export default retrieveGuest