import { errors } from 'com'
const { SystemError } = errors

export default function addToCart(productId) {
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId })
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