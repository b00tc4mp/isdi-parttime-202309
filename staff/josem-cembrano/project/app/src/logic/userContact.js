import { validate, errors } from 'com'
const { SystemError } = errors

export default async function userContact(name, email, phone, message) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.text(phone, 'phone')
    validate.text(message,'message')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message })
    }

    let res
    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, req)
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
    }else {
        return res.json()
    }
}