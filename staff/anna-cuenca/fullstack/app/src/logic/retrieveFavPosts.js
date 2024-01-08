import context from "./context"

function retrieveFavPosts(callback) {
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

            return
        }

        user.favs.forEach((postId, index) => {
            db.posts.findById(postId, (error, post) => {
                if (error) {
                    callback(error)

                    return
                }

                favs[index] = post

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

                            // si no pongo esto así, no tengo el id y no puedo pintar el edit

                            post.author = {
                                email: author.email,
                                id: author.id,
                                name: author.name
                            }

                            post.fav = user.favs.includes(post.id)

                            count2++

                            if (count2 === favs.length) callback(null, favs)
                        })
                    })
                }
            })
        })

    })
}

export default retrieveFavPosts