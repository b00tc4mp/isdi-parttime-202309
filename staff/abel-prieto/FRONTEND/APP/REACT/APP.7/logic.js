// CLASS - LOGIC

class Logic {
    constructor() {
        this.userId = null
    }

    // REGISTER USER
    registerUser(name, email, password) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')
    
        const user = findUserByEmail(email)
    
        if (user) 
            throw new Error('user already exists')
    
        createUser(name, email, password)
    }

    // LOGIN & AUTHENTICATE USER
    loginUser(email, password) {
        validateText(email, 'email')
        validateText(password, 'password')

        const user = findUserByEmail(email)

        if (!user) 
            throw new Error('user not found')
    
        if (user.password !== password)
            throw new Error('wrong credentials')

        this.userId = user.id
    }
    
    // LOGIN LOGIC
    retrieveUser() {
        const user = findUserById(this.userId)

        if (!user) 
            throw new Error('user not found')

        delete user.password
    
        return user
    }
    
    // CHECK CHANGE EMAIL
    changeUserEmail(newEmail, confirmNewEmail, password) {
        validateText(newEmail, 'new email')
        validateText(confirmNewEmail, 'new email confirm')
        validateText(password, 'new email')
    
        const user = findUserById(this.userId)
    
        if (!user || user.password !== password) {
            throw new Error('wrong credentials')
        }

        if (newEmail !== confirmNewEmail) {
            throw new Error('New email and your confirm doesnt match each other')
        }
    
        user.email = newEmail

        updateUser(user)
    }
    
    // CHECK CHANGE PASSWORD
    changeUserPassword(password, newPassword, againNewPassword) {
        validateText(password, 'password')
        validateText(newPassword, 'new password')
        validateText(againNewPassword, 'the repeat password')

        const user = findUserById(this.userId)
    
        if (!user || user.password !== password) {
            throw new Error('wrong credentials')
        }
        if (newPassword !== againNewPassword) {
            throw new Error('New pass and his confirmation are not correct. Try again') 
        }
    
        user.password = newPassword
        
        updateUser(user)
    }

    // LOGOUT USER
    logoutUser() {
        this.userId = null
    }
    
    // RETRIEVE POSTS
    retrievePosts() {
        const user = findUserById(this.userId)

        if (!user) 
            throw new Error('user not found')
    
        const posts =  getPosts()

        posts.forEach(post => {
            post.isFav = post.likes.includes(this.userId)

            const user = findUserById(post.author)

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
    
        createPost(this.userId, image, text)
    }

    // UPDATE ALL POSTS
    toggleLikePost(postId) {
        validateText(postId, 'post id')

        const post = findPostById(postId)

        if (!post) {
            throw new Error('post not found')
        }

        const likeIndex = post.likes.indexOf(this.userId)

        if (likeIndex < 0) {
            post.likes.push(this.userId)
        } else {
            post.likes.splice(likeIndex, 1)
        }

        updatePost(post)
    }

    // DELETE POST
    deletePost(postId) {
        validateText(postId, 'post id')

        const post = findPostById(postId)

        if (!post) {
            throw new Error('post not found')
        }

        deletePostById(post.id)
    }
}