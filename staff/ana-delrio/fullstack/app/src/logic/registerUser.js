import { validateText } from '../utils/validators'

function registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }

    fetch('http://localhost:8000/users', req)
        .then(res => {
            // si todo va bien irá por ese camino 
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }
            callback(null)

        })
        // está ruta la tomaríamos si el servidor se cayera por ejemplo, error de conexión
        .catch(error => callback(error))
}

export default registerUser