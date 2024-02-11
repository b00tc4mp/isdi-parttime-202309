import { validateText, validateFunction } from "../utils/validators"
import context from './context'

export default function changeUserPassword(newPassword, confirmNewPassword, password, callback) {
    validateText(newPassword, "new password")
    validateText(confirmNewPassword, "new password confirm")
    validateText(password, "password")
    validateFunction(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, newPassword, confirmNewPassword })
    }

    fetch('http://localhost:8000/users/password', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}