import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

export default function changeUserPassword(newPassword, confirmNewPassword, password) {
    validate.password(newPassword, 'new password')
    validate.password(confirmNewPassword, 'new confirm password')
    validate.password(password);

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${session.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, newPassword, confirmNewPassword })
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/password`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            };
        });
}