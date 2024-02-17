import { validate, errors } from 'com'
const { SystemError } = errors

function registerUser(name, email, password) {
    validate.text(name, 'name')
    validate.email(email)
    validate.password(password)

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    //si falla la conversion de json a objeto (cacth())
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })//solo en la respuesta tenemos el body
            }
        })
}

export default registerUser