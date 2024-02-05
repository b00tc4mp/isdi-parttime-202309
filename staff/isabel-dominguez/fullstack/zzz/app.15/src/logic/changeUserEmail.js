import session from './session'
import { validate, errors } from 'com'

export default function changeUserEmail(newEmail, confirmNewEmail, password, callback) {
    validate.email(newEmail, 'new email')
    validate.email(confirmNewEmail, 'new email confirm')
    validate.password(password)
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${(session.token)}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newEmail, confirmNewEmail, password })
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/email`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}