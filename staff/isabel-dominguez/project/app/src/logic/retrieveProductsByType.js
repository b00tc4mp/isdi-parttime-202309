import { errors } from 'com'
const { SystemError } = errors

export default function retrieveProductsByType(type) {
    return fetch(`${import.meta.env.VITE_API_URL}/products/${type}`)
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(body => { throw new errors[body.error](body.message) })
                    .catch(error => { throw new SystemError(error.message) })
            }
            return res.json()
                .catch(error => { throw new SystemError(error.message) })
        })
        .catch(error => { throw new SystemError(error.message) })
}