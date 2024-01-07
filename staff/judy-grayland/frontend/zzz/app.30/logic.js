class Logic {
    constructor() {
        this.sessionUserId = null
    }

    registerUser(name, email, password) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')

        const user = db.users.findByEmail(email)

        if (user) 
            throw new Error('user already exists')

        db.users.insert(new User(null, name, email, password, []), callback)
    }

    loginUser(email, password) {
        validateText(email, 'email')
        validateText(password, 'password')

        db.users.findByEmail(email, user => { 
            if (!user || user.password !== password)
             throw new Error('wrong credentials')

            this.sessionUserId = user.id

            callback()
        })
    }

    logoutUser(callback) {
        asyncDelay(() => {
            this.sessionUserId = null  

            callback()
        }, 0.9)
    }

    retrieveUser(callback) {
        db.users.findById(this.sessionUserId, user => {
            if (!user) 
                throw new Error('user not found')

        delete user.password

        callback(user)
        })
    }

    changeUserEmail(newEmail, newEmailConfirm, password) {
        validateText(newEmail, 'email')
        validateText(newEmailConfirm, 'new email confirm')
        validateText(password, 'password')

        const user = db.users.findById(this.sessionUserId)
                
        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newEmail !== newEmailConfirm) 
            throw new Error('emails do not match')

        user.email = newEmail
        
        db.users.update(user)
    }

    changeUserPassword(password, newPassword, newPasswordConfirm) {
        validateText(password, 'password')
        validateText(newPassword, 'new password')
        validateText(newPasswordConfirm, 'new password confirm')
        

        const user = db.users.findById(this.sessionUserId)


        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newPassword !== newPasswordConfirm)
            throw new Error('new password and its confirmation do not match')

        user.password = newPassword

        db.users.update(user)
    }

    retrievePosts(callback) {
        const sessionUser = db.users.findById(this.sessionUserId)

        if (!sessionUser) 
            throw new Error('user not found')
    
        const posts = db.posts.getAll(posts => {
            posts.forEach(post => {
                post.liked = post.likes.includes(this.sessionUserId)
                
                post.fav = sessionUser.favs.includes(post.id)
    
                const user = db.users.findById(post.author)
    
                post.author = {
                    name: user.name,
                    id: user.id
                }
            })
            callback(posts)
        })
    }

    publishPost(image, text, callback) {
        validateText(image, 'image')
        validateText(text, 'text')

        db.posts.insert(new Post(null, this.sessionUserId, image, text, []), callback)
    }

    toggleLikePost(postId) {
        validateText(postId, 'post id')

        const post = db.posts.findById(postId)

        if(!post) 
            throw new Error('post not found')

        const index = post.likes.indexOf(this.sessionUserId)
        
        if(index < 0)
            post.likes.push(this.sessionUserId)
        else
            post.likes.splice(index,1)

        db.posts.update(post)
    }

    deletePost(postId) {
        validateText(postId, 'post id')

        const post = db.posts.findById(postId)

        if(!post) {
            throw new Error('post not found')
        }

        db.posts.deleteById(post.id)
    }

    toggleFavPost(postId, callback) {
        validateText(postId, 'post id')

        const post = db.posts.findById(postId)

        if(!post){
            throw new Error('post not found')
        }

        db.users.findById(this.sessionUserId, user => {

            if(!user) {
                throw new Error('user not found')
            }

            const index = user.favs.indexOf(postId) 

            if(index < 0) {
                user.favs.push(postId)
            } else {
                user.favs.splice(index, 1)
            }

            db.users.update(user, callback)
        })
    }

    retrieveFavPosts(callback) {
        db.users.findById(this.sessionUserId, user => {

            if (!sessionUser) 
            throw new Error('user not found')

        // Option a: This method returns the posts in the order in which they were published:
        /* const favs = db.posts.getAll().filter(post => (sessionUser.favs.includes(post.id))) */

        // Option b: This method returns the posts in the order in which we favourited them:
        const favs = sessionUser.favs.map(postId => db.posts.findById(postId))

        let count = 0

        favs.forEach(post => {
            post.liked = post.likes.includes(this.sessionUserId)
            
            db.users.findById(post.author, author => {
                post.author = {
                    name: user.name,
                    id: user.id
                }
                post.fav = sessionUser.favs.includes(post.id)

                count ++

                if(count === favs.length) callback()

            })
        })
    })

    }
}

