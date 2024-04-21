import { validate, errors } from 'com'
const { SystemError } = errors

export default function createRecipe(name, description, image, products, type) {
    validate.text(name, 'name')
    validate.text(description, 'description')
    validate.text(image, 'image')
    validate.array(products, 'products')
    validate.text(type, 'type')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description, image, products, type })
    }

    return fetch(`${import.meta.env.VITE_API_URL}/recipes`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }
        })
}
