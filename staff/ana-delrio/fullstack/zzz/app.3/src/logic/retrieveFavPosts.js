import context from './context'

import { validate, errors } from 'com'

function retrieveFavPosts(callback) {
    validate.function(callback, 'callback')

    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.token}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/favs`, req)
        .then(res => {
            console.log(req)
            // Si la respuesta no es exitosa (código de estado no está en el rango 200-299), se maneja el error
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

            // Si la respuesta es exitosa, se procesa el cuerpo de la respuesta como JSON
            res.json()
                // El bloque then se encarga de manejar los posts después de que se ha parseado el cuerpo de la respuesta como JSON 
                .then(posts => callback(null, posts))
                // Si hay algún problema al intentar analizar el cuerpo de la respuesta como JSON, se captura el error en el bloque catch
                .catch(error => callback(error))
        })
        // Si hay algún error en la propia solicitud fetch, se captura el error en el bloque catch
        .catch(error => callback(error))

}

// 200 OK: Indica que la solicitud fue exitosa.
// 201 Created: Indica que la solicitud ha tenido éxito y ha llevado a la creación de un recurso.
// 204 No Content: Indica que la solicitud se ha realizado con éxito, pero no hay contenido para enviar en la respuesta.
// 400 Bad Request: Indica que la solicitud del cliente no pudo ser entendida o procesada por el servidor debido a un formato de solicitud incorrecto, falta de información, etc.
// 401 Unauthorized: Indica que se requiere autenticación y ha fallado o no se ha proporcionado.


export default retrieveFavPosts