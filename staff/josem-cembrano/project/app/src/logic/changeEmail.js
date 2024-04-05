import { validate, errors } from 'com'
const { SystemError } = errors

export default async function changeEmail(newEmail, newEmailConfirm, password) {
    validate.email(newEmail, 'newEmail')
    validate.email(newEmailConfirm, 'newEmailConfirm')
    validate.password(password, 'password')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newEmail, newEmailConfirm, password })
    }

    let res
    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/users/email`, req)
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