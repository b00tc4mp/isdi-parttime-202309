import session from './session.js'
import { errors } from 'com'
const { SystemError } = errors

async function retrieveUser() {
    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/users`, req)

        if (!res.ok) {
            const body = await res.json()
            throw new errors[body.error](body.message)
        }

        const user = await res.json()
        return user
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default retrieveUser