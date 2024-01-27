import validate from './helpers/validate'
import context from './context'

function toggleFavPost(postId, callback) {
    validate.text(postId, 'post id')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
        }
    }

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