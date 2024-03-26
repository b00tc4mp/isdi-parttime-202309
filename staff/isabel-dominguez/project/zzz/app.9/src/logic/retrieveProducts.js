import { errors } from 'com'
const { SystemError } = errors

export default function retrieveProducts() {

    return fetch(`${import.meta.env.VITE_API_URL}/products`)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }
            return res.json()
                .catch(error => { throw new SystemError(error.message) })
        })
}