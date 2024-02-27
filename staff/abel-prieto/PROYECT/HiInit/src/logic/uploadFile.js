import session from './session'

async function uploadFile(file) {
    const formData = new FormData()
    formData.append('file', file)

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${session.sessionUserId}`
        },
        body: formData
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/upload`, req)

        if (!res.ok) {
            const body = await res.json()
            throw new Error(body.message)
        }

    } catch (error) {
        throw new Error(error.message)
    }
}

export default uploadFile