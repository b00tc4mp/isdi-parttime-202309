import session from './session.js'
import { errors, validate } from 'com'
const { SystemError } = errors

async function changeUserEmail(newEmail, password, againPassword) {
    validate.email(newEmail, 'New email')
    validate.password(password, 'Password')
    validate.password(againPassword, 'Repeat password')

    const req = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify({ newEmail, password, againPassword })
    }

    const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/users/email`, req)

    try {
        if (!res.ok) {
            const body = await res.json()
            throw new errors[body.error](body.message)
        }
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default changeUserEmail