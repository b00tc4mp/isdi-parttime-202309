

function deletePost (){

    //TODO
    // deletePost(postId, callback) {
    //     // Eliminar los ID's de Favoritos

    //     validateText(postId, 'post id')
    //     db.posts.findById(postId, (error, post) => {
    //         if (error) {
    //             callback(error)
    //             return
    //         }

    //         if (!post) {
    //             callback(new Error('post not found'))
    //             return
    //         }

    //         db.users.getAll((error, users) => {
    //             if (error) {
    //                 callback(error)
    //                 return
    //             }

    //             // NO HAY QUE MANEJAR EL ERROR CON USERS???

    //             if (!users) {
    //                 callback(new Error('Users not found'))
    //             }

    //             const usersWithFavs = users.filter(user => user.favs.includes(postId))
    //             let count = 0

    //             //TODO if
    //             if (!usersWithFavs.length) {
    //                 db.posts.deleteById(postId, error => {
    //                     if (error) {
    //                         callback(error)

    //                         return
    //                     }

    //                     callback(null)
    //                 })

    //                 return
    //             }

    //             usersWithFavs.forEach(user => {
    //                 const index = user.favs.indexOf(postId)
    //                 user.favs.splice(index, 1)

    //                 db.users.update(user, error => {
    //                     if (error) {
    //                         callback(error)
    //                         return
    //                     }

    //                     // NO HAY QUE MANEJAR EL ERROR CON USER???
    //                     /*if (!user) {
    //                         callback(new Error('user not exists'))
    //                         return
    //                     }*/

    //                     count++
    //                     if (count === usersWithFavs.length) {

    //                         db.posts.deleteById(post.id, error => {
    //                             if (error) {
    //                                 callback(error)
    //                                 return
    //                             }
    //                             callback(null)
    //                         })
    //                     }

    //                 })
    //             })

    //         })


    //     })

    // }

}

export default deletePost