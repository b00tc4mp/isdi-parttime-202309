import validate from './helpers/validate'
import context from './context'

function retrieveFavPosts(callback) {
    validate.function(callback, 'callback')
    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/favs`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(posts => callback(null, posts))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

export default retrieveFavPosts