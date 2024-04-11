import { validate, errors } from 'com'
const { SystemError } = errors

export default async function changeEmail(newImage, newText) {
    validate.text(newImage, 'newImage')
    validate.text(newText, 'newText')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newImage, newText })
    }

    let res
    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/history-m`, req)
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
}