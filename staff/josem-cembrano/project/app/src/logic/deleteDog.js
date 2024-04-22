import { validate, errors } from 'com'

const { SystemError } = errors

export default async function deleteDog(dogId) {
    validate.id(dogId, 'dogId')

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${this.token}`
        }
    }
    let res
    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/dogs/${dogId}`, req)
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
        throw new Error(body.message)
    }
}