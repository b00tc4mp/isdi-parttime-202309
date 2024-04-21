import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

function retrieveSequence() {

    const req = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${session.token}`
        }
    }

    return fetch(`${import.meta.env.VITE_API_URL}/arduino/controller/ottoController`, req)

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

export default retrieveSequence