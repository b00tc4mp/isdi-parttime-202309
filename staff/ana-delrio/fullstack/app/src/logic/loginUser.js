import { validateText } from '../utils/validators'
import context from './context'


function loginUser(email, password, callback) {
    validateText(email, 'email')
    validateText(password, 'password')

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
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }
            res.json()
                .then(userId => {
                    context.sessionUserId = userId

                    callback(null)
                })
                .catch(error => callback(error))
        })
        .catch(error => callback(error))

}

export default loginUser 