// CLASS - LOGIC

class Logic {
    constructor() {
        this.loggedInEmail = null
    }

    // REGISTER USER
    registerUser(name, email, password) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')
    
        const index = findUserIndexByEmail(email)
    
        if (index > -1) 
            throw new Error('user already exists')
    
        createUser(name, email, password)
    }

    // LOGIN & AUTHENTICATE USER
    loginUser(email, password) {
        validateText(email, 'email')
        validateText(password, 'password')

        const index = findUserIndexByEmail(email)

        if (index < 0) 
            throw new Error('wrong credentials')
    
        const user = findUserByIndex(index)
    
        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        this.loggedInEmail = email
    }
    
    // LOGIN LOGIC
    retrieveUser() {
        const index = findUserIndexByEmail(this.loggedInEmail)

        if (index < 0) 
            throw new Error('user not found')
    
        const user = findUserByIndex(index)

        delete user.password
    
        return user
    }
    
    // CHECK CHANGE EMAIL
    changeUserEmail(newEmail, confirmNewEmail, password) {
        validateText(newEmail, 'new email')
        validateText(confirmNewEmail, 'new email confirm')
        validateText(password, 'new email')

        const index = findUserIndexByEmail(this.loggedInEmail)
    
        const user = findUserByIndex(index)
    
        if (!user || user.password !== password) {
            throw new Error('wrong credentials')
        }

        if (newEmail !== confirmNewEmail) {
            throw new Error('New email and your confirm doesnt match each other')
        }
    
        // modifyUserEmail(this.loggedInEmail, newEmail)
        user.email = newEmail

        updateUser(index, user)

        const posts = getPosts()

        posts.forEach(post => {
            if (post.author === this.loggedInEmail) {
                post.author = newEmail

                updatePost(index, post)
            }
        })

        this.loggedInEmail = newEmail
    }
    
    // CHECK CHANGE PASSWORD
    changeUserPassword(password, newPassword, againNewPassword) {
        validateText(password, 'password')
        validateText(newPassword, 'new password')
        validateText(againNewPassword, 'the repeat password')

        const index = findUserIndexByEmail(this.loggedInEmail)
    
        const user = findUserByIndex(index)
    
        if (!user || user.password !== password) {
            throw new Error('wrong credentials')
        }
        if (newPassword !== againNewPassword) {
            throw new Error('New pass and his confirmation are not correct. Try again') 
        }
    
        // modifyUserPassword(this.loggedInEmail, newPassword)
        user.password = newPassword
        
        updateUser(index, user)
    }
    
    // RETRIEVE POSTS
    retrievePosts() {
        const index = findUserIndexByEmail(this.loggedInEmail)

        if (index < 0) 
            throw new Error('user not found')
    
        const user = findUserByIndex(index)
    
        return getPosts()
    }
    
    // PUBLISH ALL POSTS
    publishPost(image, text) {
        validateText(image, 'image')
        validateText(text, 'text')
    
        createPost(this.loggedInEmail, image, text)
    }

    // UPDATE ALL POSTS
    toggleLikePost(postIndex) {
        validateNumber(postIndex)

        const post = findPostByIndex(postIndex)

        const likeIndex = post.likes.indexOf(this.loggedInEmail)

        if (likeIndex < 0) {
            post.likes.push(this.loggedInEmail)
        } else {
            post.likes.splice(likeIndex, 1)
        }

        updatePost(postIndex, post)
    }

    // LOGOUT USER
    logoutUser() {
        this.loggedInEmail = null
    }
}