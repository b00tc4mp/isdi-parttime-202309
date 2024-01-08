import { validateText, validateFunction } from "../utils/validators"

// EDIT POST TEXT

export default function toggleEditPostText(postId, postText, callback) {
    validateText(postId, 'post id')
    validateText(postText, 'texts post')
    validateFunction(callback, 'callback')

    db.posts.findById(postId, (error, post) => {
        if (error) {
            callback(error)

            return
        }   

        if (!post) {
            callback(new Error('post not found'))
        
            return
        }
        
        post.text = postText

        db.posts.update(post, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}