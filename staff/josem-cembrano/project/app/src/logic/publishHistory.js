import { validate, errors } from 'com'
const { SystemError } = errors

export default async function publishDog(image, text) {
    validate.text(image, 'image')
    validate.text(text, 'text')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
    }

    let res
    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/history`, req)
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
    }
}