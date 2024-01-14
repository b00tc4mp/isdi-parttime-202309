import { validateText } from '../utils/validators'
import context from './context'


function loginUser(email, password, callback) {
    validateText(email, 'email')
    validateText(password, 'password')

    // / Se crea un objeto 'req' que contiene la configuración de la solicitud
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    // esto es un endpoint, a donde estamos llamando
    fetch('http://localhost:8000/users/auth', req)
        .then(res => {
            // si todo va bien irá por ese camino 
            if (!res.ok) {
                // Se llama al método json() de la respuesta para extraer y parsear el cuerpo de la respuesta como JSON
                // Este método devuelve una nueva promesa que se resuelve con el cuerpo de la respuesta parseado
                res.json()
                    // El bloque then se encarga de manejar el cuerpo de la respuesta (body) después de que se ha parseado como JSON
                    // Se crea un nuevo objeto Error con el mensaje proporcionado en el cuerpo de la respuesta (body.message)
                    .then(body => callback(new Error(body.message)))
                    // Si hay algún problema al intentar analizar el cuerpo de la respuesta como JSON, se captura el error en el bloque catch
                    .catch(error => callback(error))

                return
            }
            // Si la respuesta es exitosa, se procesa el cuerpo de la respuesta como JSON para obtener el userId
            res.json()
                .then(userId => {
                    // Asigna el userId al contexto (context)
                    context.sessionUserId = userId

                    callback(null)
                })
                .catch(error => callback(error))
        })
        .catch(error => callback(error))

}

export default loginUser 