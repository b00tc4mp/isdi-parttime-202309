import { errors } from 'com'
import { validate } from 'com'
const { SystemError } = errors

// LOGIC - REGISTER USER
async function registerUser(username, email, password) {
    validate.text(username, 'Username')
    validate.email(email, 'Email')
    validate.password(password, 'Password')

    const req = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/users`, req)

        if (!res.ok) {
            const body = await res.json()
            throw new errors[body.error](body.message)
        }
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default registerUser
