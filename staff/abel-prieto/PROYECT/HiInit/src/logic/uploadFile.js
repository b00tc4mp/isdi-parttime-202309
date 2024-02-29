import session from './session'
import { errors } from 'com'
const { SystemError } = errors

async function uploadFile(file) {
    const formData = new FormData()
    formData.append('file', file)

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${session.token}`
        },
        body: formData
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_HIINIT_APP}/upload`, req)

        if (!res.ok) {
            const body = await res.json()
            throw new errors[body.error](body.message)
        }

    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default uploadFile