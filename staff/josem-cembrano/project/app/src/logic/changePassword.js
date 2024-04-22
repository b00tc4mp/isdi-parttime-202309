import { validate, errors } from 'com'
const { SystemError } = errors

export default async function changePassword(password, newPassword, newPasswordConfirm) {
    validate.password(password, 'password')
    validate.password(newPassword, 'newPassword')
    validate.password(newPasswordConfirm, 'newPasswordConfirm')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, newPassword, newPasswordConfirm })
    }

    let res
    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/users/password`, req)
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