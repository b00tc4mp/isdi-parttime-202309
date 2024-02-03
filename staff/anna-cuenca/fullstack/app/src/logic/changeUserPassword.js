import { validate, errors } from 'com'
import session from "./session"

function changeUserPassword(password, newPassword, newPasswordConfirm, callback) {
    validate.password(password, "password")
    validate.password(newPassword, "new password")
    validate.password(newPasswordConfirm, "new password confirm")


    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${String(session.token)}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, newPassword, newPasswordConfirm })
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/change-password`, req)
        .then(res => {

            if (!res.ok) {
                res.json()
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }

            callback(null)

        })


        .catch(error => {

            callback(error)
        })
}


export default changeUserPassword