
// LOGIC - REGISTER USER
function registerUser(username, email, password) {
    const req = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    }

    return fetch(`${import.meta.env.VITE_HIINIT_APP}users`, req)
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new Error(error.message) })
                    .then(body => { throw new Error(body.message) })
            }
        })

}

export default registerUser
