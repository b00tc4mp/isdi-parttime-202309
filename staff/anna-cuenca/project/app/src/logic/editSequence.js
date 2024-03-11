import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

function editSequence(sequenceId, movementId, action) {


    const req = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json', // Asegúrate de incluir este header para indicar que el cuerpo es JSON
            'Authorization': `Bearer ${session.token}`
        },
        // Incluye movementId y action en el cuerpo de la solicitud como un objeto JSON
        body: JSON.stringify({ movementId, action })
    }

    return fetch(`${import.meta.env.VITE_API_URL}/arduino/controller/ottoController/${sequenceId}`, req)
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

export default editSequence