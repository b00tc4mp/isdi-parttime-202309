import { errors } from 'com'

export default async function retrieveMales() {
    const req = {
        method: 'GET',
    }

    let res

    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/males`, req)
    } catch (error) {
        throw new errors.SystemError(error.message)
    }

    if (!res.ok) {
        let body

        try {
            body = await res.json()
        } catch (error) {
            throw new errors.SystemError(error.message)
        }

        throw new errors[body.error](body.message)
    }

    try {
        const dogs = await res.json()

        return dogs
    } catch (error) {
        throw new errors.SystemError(error.message)
    }
}