import { errors } from 'com'
const { SystemError } = errors

async function retrieveGuest() {
    const req = {
        method: 'GET'
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/users`, req)

        if (!res.ok) {
            const body = await res.json()
            throw new errors[body.error](body.message)
        }

        const guest = await res.json()

        return guest
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default retrieveGuest