import { validate, errors } from 'com';
const { SystemError } = errors;
import session from './session';

function deleteUser(userId) {
    validate.id(userId, 'user id');

    const req = {
        method: 'DELETE', // Asumiendo que el método para eliminar usuarios es DELETE
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    };

    return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`, req)
        .catch(error => { throw new SystemError(error.message); })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message); })
                    .then(body => { throw new errors[body.error](body.message); });
            }
        });
}

export default deleteUser;
