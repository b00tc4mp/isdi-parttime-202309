import { validateFunction } from "../utils/validators"
import context from "./context"

// LOGIN LOGIC

export default function retrieveUser(callback) {
    validateFunction(callback, 'callback')

    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
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

            res.json()
                .then(user => callback(null, user))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}