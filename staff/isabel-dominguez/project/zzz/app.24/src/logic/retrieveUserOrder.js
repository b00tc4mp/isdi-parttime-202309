import session from './session'
import { errors } from 'com'

const { SystemError } = errors

export default function retrieveUserOrder() {
    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    }

    return fetch(`${import.meta.env.VITE_API_URL}/cart/order`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                throw new SystemError('Response not OK')
            }

            // Verificar si la respuesta está vacía
            const contentType = res.headers.get('content-type')
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return res.json() // Parsear la respuesta JSON si no está vacía
            } else {
                return null // Retornar null si la respuesta está vacía
            }
        })
        .then(data => {
            return data // Retorna los datos si están disponibles, o null si no lo están
        })
}