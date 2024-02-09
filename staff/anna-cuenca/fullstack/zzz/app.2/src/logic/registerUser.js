import { validateText } from "../utils/validators"

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