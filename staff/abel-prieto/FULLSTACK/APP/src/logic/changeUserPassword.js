import validate from './helpers/validate'
import context from "./context"
import errors from './errors'

// CHECK CHANGE PASSWORD 

export default function changeUserPassword(password, newPassword, againNewPassword, callback) {
    validate.password(password)
    validate.password(newPassword, 'new password')
    validate.password(againNewPassword, 'repeat password')
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${String(context.sessionUserId)}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, newPassword, againNewPassword })
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