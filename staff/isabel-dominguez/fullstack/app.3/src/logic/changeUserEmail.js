import { validateText, validateFunction } from "../utils/validators"
import context from './context'

export default function changeUserEmail(newEmail, confirmNewEmail, password, callback) {
    validateText(newEmail, "new email")
    validateText(confirmNewEmail, "new email confirm")
    validateText(password, "password")
    validateFunction(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${(context.sessionUserId)}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newEmail, confirmNewEmail, password })
    }

    fetch('http://localhost:8000/users/email', req)
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