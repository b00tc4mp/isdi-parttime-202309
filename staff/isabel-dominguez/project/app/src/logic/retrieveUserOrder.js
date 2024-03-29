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

                return null
            }

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
        })
}