import { validateText, validateFunction } from "../utils/validators"
import context from './context'

export default function deleteUser(userId, callback) {
    validateText(userId, "user id")
    validateFunction(callback, 'callback')

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`,
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:8000/users', req)
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