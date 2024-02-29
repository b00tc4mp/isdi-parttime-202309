import { errors } from 'com'

const { SystemError } = errors

function ottoController(action, message = '') {
    let bodyData = { action: action }

    // Si la acción es 'sayHi'
    if (action === 'sayHi' && message) {
        bodyData.message = message
    }

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData),
    };

    return fetch(`${import.meta.env.VITE_API_URL}/arduino/controller/ottoController`, req)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => {
                        throw new SystemError(error.message)
                    })
                    .then(body => {
                        throw new errors[body.error](body.message)
                    })
            }
            return res.json()
        })
}

export default ottoController