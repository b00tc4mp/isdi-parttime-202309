import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

function editTutorial(tutorialId, { title, text }) {
    const req = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.token}`
        },
        body: JSON.stringify({ title, text })
    };

    return fetch(`${import.meta.env.VITE_API_URL}/tutorials/${tutorialId}`, req)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(body => {
                    throw new errors[body.error](body.message)
                })
            }
            // Si la respuesta es exitosa y no esperamos contenido, no intentamos procesarla como JSON
            if (res.status === 204) {
                return null // O manejar adecuadamente según tu lógica de aplicación
            }
            return res.json()
        })
}

export default editTutorial