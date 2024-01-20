import { validateText } from '../utils/validators'
import context from "./context"

function toggleFavPost(postId, callback) {
    validateText(postId, 'post id')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
        }
    }

    // Se realiza una solicitud fetch a la URL específica del post con el postId proporcionado y la configuración en req
    fetch(`http://localhost:8000/posts/${postId}/favs`, req)
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
