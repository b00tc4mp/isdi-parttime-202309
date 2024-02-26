import session from './session.js'

async function loginUser(email, password) {
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/users/auth`, req)

        if (!res.ok) {
            const body = await res.json()
            throw new Error(body.message)
        }

        const userId = await res.json()

        session.sessionUserId = userId
    } catch (error) {
        throw new Error(error.message)
    }
}

export default loginUser
