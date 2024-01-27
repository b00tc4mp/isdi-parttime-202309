import context from './context'
import validate from './helpers/validate'

function retrievePosts(callback) {
    //la función toma un callback como argumento 
    validate.function(callback, 'callback')
    //declaramos la constante req (es un objeto representando la solicitud HTTP que se enviará)
    const req = {
        //se indica el método de la solicitud, el GET es utilizado para recuperar datos
        method: 'GET',
        //se establecen los encabezados HTTP de la solicitud
        headers: {
            'Authorization': `Bearer ${context.sessionUserId}`
        }
    }

    //se hace una llamada a la función fetch para realizar la solicitud HTTP a la URL
    // especificada: una combinacion de la variable de entorno ('VITE_API_URL) y el path
    // /posts ; Se pasa el objeto req como segundo parámetro a fetch
    fetch(`${import.meta.env.VITE_API_URL}/posts`, req)
        // es una promesa que maneja la respuesta ('res') del 'fetch'
        .then(res => {
            if (!res.ok) { //se verifica si la respuesta fue exitosa o no
                res.json() //convierte la respuesta a JSON
                    // si la conversión es exitosa, llama al callback con un nuevo error
                    // que contiene el mensaje del cuerpo de la respuesta
                    .then(body => callback(new Error(body.message)))
                    //si hay un error al convertir la respuesta a JSON, llama al callback con ese error
                    .catch(error => callback(error))

                return
            } //finaliza la respuesta no exitosa

            res.json()
                .then(posts => callback(null, posts))
                .catch(error => callback(error))

        })
        .catch(error => console.error(error)) // este error es

}

export default retrievePosts