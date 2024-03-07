import { errors } from 'com'

const { SystemError } = errors

function ottoController(action, message = '', sequenceId = null) {
    let bodyData = { action: action };

    // Agrega sequenceId al bodyData solo si se proporciona
    if (sequenceId) {
        bodyData.sequenceId = sequenceId;
    }

    // Si la acción es 'sayHi' y se proporciona un mensaje, inclúyelo también
    if (action === 'sayHi' && message) {
        bodyData.message = message;
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
            throw new SystemError(error.message);
        })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => {
                        throw new SystemError(error.message);
                    })
                    .then(body => {
                        // Asegúrate de que el manejo de errores aquí es correcto según tu implementación de errores
                        throw new Error(body.message); // O usa una lógica específica de manejo de errores si es necesario
                    });
            }
            return res.json();
        });
}

export default ottoController