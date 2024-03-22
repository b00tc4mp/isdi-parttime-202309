import session from './session.js'
import { errors, validate } from 'com'
const { SystemError } = errors

// LOGIC - DELETE USERS (ONLY ADMIN)
function deleteUser(userId) {
    validate.id(userId, 'ID User')

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    }

    return fetch(`${import.meta.env.VITE_HIINIT_APP}/users/delete/${String(userId)}`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }
        })
}

export default deleteUser