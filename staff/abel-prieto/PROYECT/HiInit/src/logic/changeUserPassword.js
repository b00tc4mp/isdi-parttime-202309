import session from './session.js'
import { errors, validate } from 'com'
const { SystemError } = errors

async function changeUserPassword(password, newPassword, againNewPassword) {
    validate.password(password, 'Password')
    validate.password(newPassword, 'New password')
    validate.password(againNewPassword, 'Repeat new password')

    const req = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify({ password, newPassword, againNewPassword })
    }

    const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/users/password`, req)

    try {
        if (!res.ok) {
            const body = await res.json()
            throw new errors[body.error](body.message)
        }
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default changeUserPassword