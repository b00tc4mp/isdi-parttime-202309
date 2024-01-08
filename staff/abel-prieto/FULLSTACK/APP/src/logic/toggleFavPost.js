import { validateText, validateFunction } from "../utils/validators"
import context from "./context"

// FAV BUTTON

export default function toggleFavPost(postId, callback) {
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${postId}`
        }
    }

    fetch(`http://localhost:8000/users/${context.sessionUserId}/favs`, req)
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