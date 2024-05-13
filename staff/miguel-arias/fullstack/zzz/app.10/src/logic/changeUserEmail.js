import session from './session'
import { validate, errors } from 'com'

function changeUserEmail(newEmail, newEmailConfirm, password, callback) {
    validate.email(newEmail, 'new email')
    validate.email(newEmailConfirm, 'new email confirm')
    validate.password(password, 'password')
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify({ newEmail, newEmailConfirm, password })
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

export default changeUserEmail