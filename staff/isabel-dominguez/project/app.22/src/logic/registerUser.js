import { validate, errors } from 'com'
const { SystemError } = errors

export default function registerUser(name, email, password) {
    validate.text(name, 'name')
    validate.email(email)
    validate.password(password);

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
                    .catch(error => { throw new SystemError(error.message) }) //Si falla la conversión de JSON, es decir el parseo (proceso de analizar una cadena)
                    .then(body => { throw new errors[body.error](body.message) })
            };
        });
};