import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

export default function changeUserEmail(newEmail, confirmNewEmail, password) {
    validate.email(newEmail, 'new email')
    validate.email(confirmNewEmail, 'new email confirm')
    validate.password(password);

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${(session.token)}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newEmail, confirmNewEmail, password })
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/email`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            };
        });
}