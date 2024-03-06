import { validate, errors } from 'com'
const { SystemError } = errors

export default function createProduct(name, image, price, type) {
    validate.text(name, 'name')
    validate.text(image, 'image')
    validate.number(price, 'price')
    validate.text(type, 'type')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, image, price, type })
    }

    return fetch(`${import.meta.env.VITE_API_URL}/products`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }
        })
}
