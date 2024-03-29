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
        let body

        try {
            body = await res.json()
        } catch (error) {
            throw new SystemError(error.message)
        }

        throw new errors[body.error](body.message)
    }

    try {
        const user = await res.json()

        return user
    } catch (error) {
        throw new SystemError(error.message)
    }
}