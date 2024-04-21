import { validate, errors } from 'com'
const { SystemError } = errors

export default function updateCartItemQuantity(productId, orderId, quantityProduct) {
    validate.id(productId, 'product id')
    validate.id(orderId, 'order id')
    validate.number(quantityProduct, 'quantity')

    const req = {
        method: 'PATCH'
    }

    return fetch(`http://localhost:9000/cart/update/${productId}/${orderId}/${quantityProduct}`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }
        })
}