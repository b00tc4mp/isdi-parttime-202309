
// LOGIC - REGISTER USER
async function registerUser(username, email, password) {
    const req = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/users`, req)

        if (!res.ok) {
            const body = await res.json()
            throw new Error(body.message)
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export default registerUser
