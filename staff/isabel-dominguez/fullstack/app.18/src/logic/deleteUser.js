import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

export default function deleteUser(userId) {
    validate.id(userId, "user id");

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${session.token}`,
            'Content-Type': 'application/json'
        }
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/:userId`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            };
        });
}