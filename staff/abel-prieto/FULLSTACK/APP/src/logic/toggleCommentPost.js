import { validateText, validateFunction } from "../utils/validators"

// COMMENT TEXT POSTS

export default function toggleCommentPostText(postId, comment, callback) {
    validateText(postId, "post id")
    validateText(comment, "comment")
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
        
        post.coments.push(comment);


        db.posts.update(post, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}