import { validateFunction } from "../utils/validators"
import context from "./context"

// RETRIEVE FAV SESSION POSTS

export default function retrieveFavUserPosts(callback) {
    validateFunction(callback, 'callback')

    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
        }
    }

    fetch('http://localhost:8000/users/favs', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))
                
                return

            }

            res.json()
                .then(favs => callback(null, favs))
                .catch(error => callback(error))
            
        })
        .catch(error => callback(error))
}