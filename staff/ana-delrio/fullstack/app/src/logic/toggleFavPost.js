import validate from './helpers/validate'
import context from "./context"

function toggleFavPost(postId, callback) {
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
        }
    }

    // Se realiza una solicitud fetch a la URL específica del post con el postId proporcionado y la configuración en req
    fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/favs`, req)
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

export default toggleFavPost 
