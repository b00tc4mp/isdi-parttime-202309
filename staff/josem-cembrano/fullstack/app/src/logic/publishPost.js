import validate from './helpers/validate'
import context from './context'

function publishPost(image, text, callback) {
    validate.text(image)
    validate.text(text)
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
    }

    fetch('http://localhost:8000/posts', req)
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