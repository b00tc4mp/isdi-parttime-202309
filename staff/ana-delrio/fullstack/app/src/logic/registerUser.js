import { validate } from 'com'

import errors from './errors'

function registerUser(name, email, password, callback) {
    validate.text(name, 'name')
    validate.email(email)
    validate.password(password)
    validate.function(callback, 'callback')

    // configuración de la solicitud HTTP (fetch)
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }

    // Realización de la solicitud con la configuración del objeto proporcionado rew
    fetch(`${import.meta.env.VITE_API_URL}/users`, req)
        .then(res => {
            // si todo va bien irá por ese camino 
            if (!res.ok) {
                // Se llama al método json() de la respuesta para extraer y parsear el cuerpo de la respuesta como JSON
                // Este método devuelve una nueva promesa que se resuelve con el cuerpo de la respuesta parseado
                res.json()
                    // El bloque then se encarga de manejar el cuerpo de la respuesta (body) después de que se ha parseado como JSON
                    // Se crea un nuevo objeto Error con el mensaje proporcionado en el cuerpo de la respuesta (body.message)
                    .then(body => callback(new errors[body.error](body.message)))
                    // Si hay algún problema al intentar analizar el cuerpo de la respuesta como JSON, se captura el error en el bloque catch
                    .catch(error => callback(error))

                return
            }
            // Si la respuesta es exitosa, se llama al callback sin error
            callback(null)

        })
        // está ruta la tomaríamos si el servidor se cayera por ejemplo, error de conexión
        .catch(error => callback(error))
}

export default registerUser