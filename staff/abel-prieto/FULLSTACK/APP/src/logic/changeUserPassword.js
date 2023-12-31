import { validateFunction, validateText } from "../utils/validators"
import context from "./context"

// CHECK CHANGE PASSWORD 

export default function changeUserPassword(password, newPassword, againNewPassword, callback) {
    validateText(password, 'password')
    validateText(newPassword, 'new password')
    validateText(againNewPassword, 'repeat password')
    validateFunction(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, newPassword, againNewPassword }) 
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