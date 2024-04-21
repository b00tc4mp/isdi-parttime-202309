import { errors, validate } from 'com'
const { SystemError } = errors
import session from './session'

export default function addToCart(productId) {
    validate.id(productId, "product id")

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    }

    return fetch(`${import.meta.env.VITE_API_URL}/cart/${productId}`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }
        })
}