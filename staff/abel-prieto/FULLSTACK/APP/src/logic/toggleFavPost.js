import validate from "./helpers/validate"
import context from "./context"

// FAV BUTTON

export default function toggleFavPost(postId, callback) {
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${postId}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/${context.sessionUserId}/favs`, req)
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