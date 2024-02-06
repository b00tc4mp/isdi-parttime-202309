import { validate, errors } from 'com'
import session from "./session"
const { SystemError } = errors

function changeUserPassword(password, newPassword, newPasswordConfirm) {
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
    return fetch(`${import.meta.env.VITE_API_URL}/users/change-password`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {

            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })


            }



        })
}


export default changeUserPassword