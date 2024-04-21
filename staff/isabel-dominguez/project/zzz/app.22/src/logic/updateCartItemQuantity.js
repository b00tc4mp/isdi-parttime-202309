import { validate, errors } from 'com'
const { SystemError } = errors

export default function updateCartItemQuantity(productId, orderId, quantityDelta) {
    validate.id(productId, 'product id')
    validate.id(orderId, 'order id')
    validate.number(quantityDelta, 'quantity')

    const req = {
        method: 'PATCH'
    }

    return fetch(`http://localhost:9000/cart/update/${productId}/${orderId}/${quantityDelta}`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }
        })
}