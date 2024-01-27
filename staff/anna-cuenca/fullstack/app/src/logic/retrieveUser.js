import context from "./context"
import validate from './helpers/validate'

function retrieveUser(callback) {
    validate.function(callback, 'callback')
    const req = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${context.token}`
        }

    }

    fetch(`${import.meta.env.VITE_API_URL}/users`, req)

        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(user => callback(null, user))
                .catch(error => callback(error))

        })
        .catch(error => callback(error)) // este error es
}

export default retrieveUser