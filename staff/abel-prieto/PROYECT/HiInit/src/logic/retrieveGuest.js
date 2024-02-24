
async function retrieveGuest() {
    const req = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}users`, req)

        if (!res.ok) {
            const body = await res.json()
            throw new Error(body.message)
        }

        const guest = await res.json()

        return guest
    } catch (error) {
        throw new Error(error.message)
    }
}

export default retrieveGuest