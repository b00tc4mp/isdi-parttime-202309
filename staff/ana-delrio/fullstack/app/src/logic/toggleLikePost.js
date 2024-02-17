import { validate, errors } from 'com'

export default function toggleLikePost(postId, callback) {
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${this.token}`
        }
    }

    // Se realiza una solicitud fetch a la URL específica del post con el postId proporcionado y la configuración en req
    fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/likes`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }
            callback(null)

        })
        .catch(error => callback(error))
}



