import session from './session.js'

function retrieveUser() {
    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${session.sessionUserId}`
        }
    }

    return fetch(`${import.meta.env.VITE_HIINIT_APP}users`, req)
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new Error(error.message) })
                    .then(body => { throw new Error(body.message) })
            }

            return res.json()
                .catch(error => { throw new Error(error.message) })
                .then(user => { return user })
        })
}

export default retrieveUser