// CLASS - LOGIC

class Logic {
    constructor() {
        this.sessionUserId = null
    }

    // REGISTER USER
    registerUser(name, email, password) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')
    
        const user = db.users.findByEmail(email)
    
        if (user) 
            throw new Error('user already exists')
    
        db.users.insert(new User(null, name, email, password))
    }

    // LOGIN & AUTHENTICATE USER
    loginUser(email, password) {
        validateText(email, 'email')
        validateText(password, 'password')

        const user = db.users.findByEmail(email)

        if (!user) 
            throw new Error('user not found')
    
        if (user.password !== password)
            throw new Error('wrong credentials')

        this.sessionUserId = user.id
    }
    
    // LOGIN LOGIC
    retrieveUser() {
        const user = db.users.findById(this.sessionUserId)

        if (!user) 
            throw new Error('user not found')

        delete user.password
    
        return user
    }

    // LOGOUT USER
    logoutUser() {
        this.sessionUserId = null
    }
    
    // CHECK CHANGE EMAIL
    changeUserEmail(newEmail, confirmNewEmail, password) {
        validateText(newEmail, 'new email')
        validateText(confirmNewEmail, 'new email confirm')
        validateText(password, 'new email')
    
        const user = db.users.findById(this.sessionUserId)
    
        if (!user || user.password !== password) {
            throw new Error('wrong credentials')
        }

        if (newEmail !== confirmNewEmail) {
            throw new Error('New email and your confirm doesnt match each other')
        }
    
        user.email = newEmail

        db.users.update(user)
    }
    
    // CHECK CHANGE PASSWORD
    changeUserPassword(password, newPassword, againNewPassword) {
        validateText(password, 'password')
        validateText(newPassword, 'new password')
        validateText(againNewPassword, 'the repeat password')

        const user = db.users.findById(this.sessionUserId)
    
        if (!user || user.password !== password) {
            throw new Error('wrong credentials')
        }
        if (newPassword !== againNewPassword) {
            throw new Error('New pass and his confirmation are not correct. Try again') 
        }
    
        user.password = newPassword
        
        db.users.update(user)
    }
    
    // RETRIEVE POSTS
    retrievePosts() {
        const user = db.users.findById(this.sessionUserId)

        if (!user) 
            throw new Error('user not found')
    
        const posts =  db.posts.getAll()

        posts.forEach(post => {
            post.isFav = post.likes.includes(this.sessionUserId)

            const user = db.users.findById(post.author)

            post.author = {
                email : user.email,
                id : user.id
            }
        })

        return posts
    }
    
    // PUBLISH ALL POSTS
    publishPost(image, text) {
        validateText(image, 'image')
        validateText(text, 'text')
    
        db.posts.insert(new Post(null, this.sessionUserId, image, text))
    }

    // UPDATE ALL POSTS
    toggleLikePost(postId) {
        validateText(postId, 'post id')

        const post = db.posts.findById(postId)

        if (!post) {
            throw new Error('post not found')
        }

        const likeIndex = post.likes.indexOf(this.sessionUserId)

        if (likeIndex < 0) {
            post.likes.push(this.sessionUserId)
        } else {
            post.likes.splice(likeIndex, 1)
        }

        db.posts.update(post)
    }

    // DELETE POST
    deletePost(postId) {
        validateText(postId, 'post id')

        const post = db.posts.findById(postId)

        if (!post) {
            throw new Error('post not found')
        }

        db.posts.deleteById(post.id)
    }
}