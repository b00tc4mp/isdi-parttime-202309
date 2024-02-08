import { validate, errors } from 'com'
const { SystemError } = errors

import context from './context'

function retrieveUser() {
    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.token}`
        }
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users`, req)
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

export default retrieveUser