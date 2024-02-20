import { errors } from 'com'
const { SystemError } = errors

export default async function retrieveUser() {
    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${this.token}`
        }
    }
    let res

    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/users`, req)

    } catch (error) {
        throw new SystemError(error.message)
    }

    if (!res.ok) {
        try {
            const body = await res.json()
            throw new errors[body.error](body.message)
        } catch (error) {
            throw new SystemError(error.message)
        }
    }

    try {
        const user = await res.json()

        return user
    } catch (error) {
        throw new SystemError(error.message)
    }
}