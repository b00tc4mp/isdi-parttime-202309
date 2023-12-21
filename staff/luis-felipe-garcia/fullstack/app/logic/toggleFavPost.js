import { validateText } from "../utils/validators"

function toggleFavPost() {
    validateText(postId, 'post id')

    //TODO

    // toggleFavPost(postId, callback) {
    //     

    //     db.posts.findById(postId, (error, post) => {
    //         if (error) {
    //             callback(error)
    //             return
    //         }

    //         if (!post) {
    //             callback(new Error('Post not found'))
    //             return
    //         }

    //         db.users.findById(this.sessionUserId, (error, user) => {
    //             if (error) {
    //                 callback(error)
    //                 return
    //             }

    //             if (!user) {
    //                 callback(new Error('User not found'))
    //                 return
    //             }

    //             const index = user.favs.indexOf(post.id)

    //             if (index < 0)
    //                 user.favs.push(post.id)
    //             else
    //                 user.favs.splice(index, 1)

    //             db.users.update(user, error => {
    //                 if (error) {
    //                     callback(error)
    //                     return
    //                 }
    //                 callback(null)
    //             })
    //         })
    //     })
    // }
}

export default toggleFavPost