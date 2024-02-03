import validate from './helpers/validate'
import context from './context'

import errors from './errors'

export default function changeUserPassword(newPassword, confirmNewPassword, password, callback) {
    validate.password(newPassword, 'new password')
    validate.password(confirmNewPassword, 'new confirm password')
    validate.password(password)
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, newPassword, confirmNewPassword })
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/password`, req)
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