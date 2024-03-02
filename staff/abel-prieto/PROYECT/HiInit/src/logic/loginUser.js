import session from './session.js'
import { validate, errors } from 'com'
const { SystemError } = errors

async function loginUser(email, password) {
    validate.email(email, 'Email')
    validate.password(password, 'Password')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/users/auth`, req)

        if (!res.ok) {
            const body = await res.json()
            throw new errors[body.error](body.message)
        }

        const token = await res.json()
        const payloadB64 = await token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
        const payloadJson = atob(payloadB64)
        const payload = await JSON.parse(payloadJson)
        const userId = await payload.sub

        session.sessionUserId = userId
        session.token = token
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default loginUser
