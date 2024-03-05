import { errors } from 'com'
const { SystemError } = errors

export default function retrieveRecipes() {

    return fetch(`${import.meta.env.VITE_API_URL}/recipes`)
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