import session from './session.js'

function loginUser(email, password) {
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    return fetch(`${import.meta.env.VITE_HIINIT_APP}users/auth`, req)
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            if (!res.ok) {
                res.json()
                    .catch(error => { throw new Error(error.message) })
                    .then(body => { throw new Error(body.message) })
            }

            return res.json()
                .catch(error => { throw new Error(error.message) })
                .then(userId => {
                    session.sessionUserId = userId
                })
        })
}

export default loginUser
