import { validateFunction, validateText } from "../utils/validators"
import context from "./context"

// CHECK CHANGE EMAIL 

export default function changeUserEmail(newEmail, againNewEmail, password, callback) {
    validateText(newEmail, 'new email')
    validateText(againNewEmail, 'confirm new email')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newEmail, againNewEmail, password })
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