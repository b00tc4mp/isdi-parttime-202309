import validate from "./helpers/validate"

// COMMENT TEXT POSTS

export default function toggleCommentPostText(postId, comment, callback) {
    validate.text(postId, "post id")
    validate.text(comment, "comment")
    validate.function(callback, 'callback')

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