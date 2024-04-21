import session from './session'
import { errors } from 'com'

const { SystemError } = errors

export default function retrieveUserOrder() {

    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    }

    return fetch(`${import.meta.env.VITE_API_URL}/cart/order`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                throw new SystemError('Response not OK')
            }

            const contentType = res.headers.get('content-type')
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return res.json()
            } else {
                return null
            }
        })
        .then(data => {
            return data
        })
}