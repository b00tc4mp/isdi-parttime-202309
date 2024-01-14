import context from "./context"


function retrieveUser(callback) {
    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
        },
      //  body: JSON.stringify({ email, password })
    }

    fetch('http://localhost:8000/users', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))
                return
            }

            res.json()
           // debugger
                .then(user => callback(null, user))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

export default retrieveUser