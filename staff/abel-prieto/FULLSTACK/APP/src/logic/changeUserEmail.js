import validate from "./helpers/validate"
import context from "./context"

// CHECK CHANGE EMAIL 

export default function changeUserEmail(newEmail, againNewEmail, password, callback) {
    validate.email(newEmail, 'new email')
    validate.email(againNewEmail, 'confirm new email')
    validate.password(password)
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${String(context.sessionUserId)}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newEmail, againNewEmail, password })
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/email`, req)
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