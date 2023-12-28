import { validateFunction, validateText } from "../utils/validators"

// DELETE POST (PENDIENTE)

export default function deletePost(postId, callback) {
    validateText(postId, 'post id')
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

        // 1. Filtrado por usuarios con post.id en favs
        // 2. Hacer forEach con ese ARRAY

        db.users.getAll((error, users) => {
            if (error) {
                callback(error)

                return
            }

            const usersWithFav = users.filter((user) => user.favs.includes(postId))

            let count = 0

            if (!usersWithFav.length) {
                db.posts.deleteById(postId, error => {
                    if (error) {
                        callback(error)

                        return
                    }

                    callback(null)
                })

                return
            }

            usersWithFav.forEach(user => {

                const index = user.favs.indexOf(postId)

                user.favs.splice(index, 1)

                db.users.update(user, error => {
                    if (error) {
                        callback(error)

                        return
                    }

                    count++

                    if (count === usersWithFav.length) {
                        // TODO (DELETE POST - DONE)
                        db.posts.deleteById(postId, error => {
                            if (error) {
                                callback(error)

                                return
                            }

                            callback(null)
                        })
                    }
                })
            })
        })
    })  
}