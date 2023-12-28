import { validateFunction, validateText } from "../utils/validators"
import context from "./context"

// PUBLISH ALL POSTS

export default function publishPost(image, text, callback) {
    validateText(image, 'image')
    validateText(text, 'text')
    validateFunction(callback, 'callback')
    
    db.posts.insert(new Post(null, context.sessionUserId, image, text, [], []), error => {
        if (error) {
            callback(error)

            return
        }

        callback(null)
    })
}