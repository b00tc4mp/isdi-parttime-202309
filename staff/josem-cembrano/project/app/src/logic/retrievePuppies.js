import { errors } from 'com'
const SystemError = errors

export default async function retrievePuppies() {
    const req = {
        method: 'GET',
    }

    let res

    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/puppies`, req)
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
        const dogs = await res.json()

        return dogs
    } catch (error) {
        throw new SystemError(error.message)
    }
}