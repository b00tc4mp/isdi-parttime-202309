


function retrievePosts(callback) {
    db.users.findById(this.sessionUserId, (error, user) => {
        if (error) {
            callback(error)
            return
        }

        if (!user) {
            callback(new Error('user not found'))
            return
        }

        const posts = db.posts.getAll((error, posts) => {
            if (error) {
                callback(error)
                return
            }
            let count = 0
            posts.forEach(post => {
                post.liked = post.likes.includes(this.sessionUserId)
                db.users.findById(post.author, (error, author) => {
                    if (error) {
                        callback(error)
                        return
                    }
                    //post.author = author.name
                    post.author = {
                        name: author.name,
                        id: author.id
                    }
                    post.fav = user.favs.includes(post.id)
                    count++
                    if (count === posts.length)
                        callback(null, posts)
                })
            })
        })
    })
}


export default retrievePost