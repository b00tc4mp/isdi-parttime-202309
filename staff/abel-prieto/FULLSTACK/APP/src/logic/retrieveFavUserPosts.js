import { validateFunction } from "../utils/validators"
import context from "./context"

// RETRIEVE FAV SESSION POSTS

export default function retrieveFavUserPosts(callback) {
    validateFunction(callback, 'callback')

    db.users.findById(context.sessionUserId, (error, user) => {
        if (error) {
            callback(error) 

            return
        }

        if (!user) {
            callback(new Error('user not found'))

            return
        }
    
        const favs = []

        let count = 0

        if (!user.favs.length) {
            callback(null, favs)
            // Si hay error, pasa "null" - Si no hay, devuelve los favs del user

            return
        }

        user.favs.forEach(postId => {
            db.posts.findById(postId, (error, post) => {
                if (error) {
                    callback(error)

                    return
                }

                favs.push(post)

                count++

                if (count === user.favs.length) {
                    let count2 = 0

                    favs.forEach(post => {
                        post.liked = post.likes.includes(context.sessionUserId)

                        db.users.findById(post.author, (error, author) => {
                            if (error) {
                                callback(error)

                                return
                            }

                            post.author = {
                                email: author.email,
                                id: author.id
                            }

                            post.fav = user.favs.includes(post.id)

                            count2++

                            if (count2 === favs.length) {
                                callback(null, favs)
                                // Si hay error, tira "null" - Si todo OK, retorna al forEach los "favs"
                            }
                        })
                    })
                }

            })
        })
    })
}