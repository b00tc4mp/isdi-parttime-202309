import validate from './helpers/validate'

function registerUser(name, email, password, callback) {
    validate.text(name, 'name')
    validate.email(email)
    validate.password(password)
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }

    fetch(`${import.meta.env.VITE_API_URL}/users`, req)

        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }
            callback(null)

        })
        .catch(error => console.error(error)) // este error es por si el servidor está caido
}

export default registerUser