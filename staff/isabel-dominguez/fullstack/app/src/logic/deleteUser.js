import { validateText, validateFunction } from "../utils/validators"
import context from './context'

export default function deleteUser(userId, password, callback) {
    validateText(userId, "user id")
    validateText(password, "password")
    validateFunction(callback, 'callback')

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, password })
    }

    fetch('http://localhost:8000/users', req)
        .then(res => {
            if (!res.ok) {
                return res.json().then(body => {
                    throw new Error(body.message)
                })
            }
        })
        .then(() => callback(null))
        .catch(error => callback(error))
}