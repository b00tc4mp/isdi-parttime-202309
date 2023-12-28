


function retrieveFavPosts(callback) {
    //TO DO

    // retrieveFavPosts(callback) {
    //     db.users.findById(this.sessionUserId, (error, user) => {
    //         if (error) {
    //             callback(error)
    //             return
    //         }

    //         if (!user) {
    //             callback(new Error('user not found'))
    //             return
    //         }

    //         const favs = []
    //         let count = 0

    //         if (!user.favs.length) {
    //             callback(null, favs)
    //             return
    //         }

    //         user.favs.forEach((postId, index) => {
    //             db.posts.findById(postId, (error, post) => {
    //                 if (error) {
    //                     callback(error)
    //                     return
    //                 }

    //                 favs[index] = post
    //                 count++

    //                 if (count === user.favs.length) {
    //                     let count2 = 0
    //                     favs.forEach(post => {
    //                         post.liked = post.likes.includes(this.sessionUserId)
    //                         db.users.findById(post.author, (error, author) => {
    //                             if (error) {
    //                                 callback(error)
    //                                 return
    //                             }

    //                             //post.author = author.name
    //                             post.author = {
    //                                 name: author.name,
    //                                 id: author.id
    //                             }
    //                             post.fav = user.favs.includes(post.id)
    //                             count2++

    //                             if (count2 === favs.length) callback(null, favs)
    //                         })
    //                     })
    //                 }
    //             })
    //         })
    //     })
    // }
}

export default retrieveFavPosts