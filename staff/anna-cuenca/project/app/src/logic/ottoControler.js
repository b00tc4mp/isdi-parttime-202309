import { errors } from 'com'

const { SystemError } = errors

function ottoController(action) {
    // Configurar la solicitud al servidor, incluyendo la acción en el cuerpo de la solicitud
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: action }), // Añade la acción al cuerpo de la solicitud
    };

    return fetch(`${import.meta.env.VITE_API_URL}/arduino/controller/ottoController`, req)
        .catch(error => {
            // Manejo de errores en caso de que el servidor no responda
            throw new SystemError(error.message);
        })
        .then(res => {
            if (!res.ok) {
                // Manejo de errores basado en la respuesta del servidor
                return res.json()
                    .catch(error => {
                        throw new SystemError(error.message)
                    })
                    .then(body => {
                        // Lanzar un error específico basado en la respuesta del servidor
                        throw new errors[body.error](body.message)
                    })
            }
            // Opcionalmente, puedes devolver una promesa resuelta con un mensaje o resultado específico
            return res.json() // Esto asume que el servidor envía una respuesta JSON
        })
}

export default ottoController