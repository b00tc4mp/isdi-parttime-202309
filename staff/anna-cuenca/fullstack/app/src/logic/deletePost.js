import validate from './helpers/validate'

function deletePost(postId, callback) {
    validate.text(postId, 'post id')
    db.posts.findById(postId, (error, post) => {
        if (error) {
            callback(error)
            return
        }
        if (!post) {
            callback(new Error('post not found'))

            return
        }
        db.users.getAll((error, users) => {
            if (error) {
                callback(error)

                return
            }

            const usersWithFav = users.filter((user) => user.favs.includes(postId))
            let count = 0

            if (!usersWithFav.length) {
                db.posts.deleteById(post.id, (error) => { // Eliminar el post por su ID en la base de datos
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
                        db.posts.deleteById(post.id, (error) => {
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

export default deletePost