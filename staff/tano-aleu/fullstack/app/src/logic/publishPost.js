import validate from './helpers/validate'
import context from './context'

function publishPost(image, text, callback) {
    validate.text(image, 'image')
    validate.text(text, 'text')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}

export default publishPost
