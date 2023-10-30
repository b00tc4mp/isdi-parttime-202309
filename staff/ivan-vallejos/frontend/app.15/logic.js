class Logic {
    constructor () {
        this.loggedInEmail = null
    }

    registerUser (name, email, password) {
        validatetext (name, 'name')
        validatetext (email, 'email')
        validatetext (password, 'password')

        const user = findUserByEmail (email)
        
        if (user)
            throw new Error ('User already exists')

        createUSer (name, email, password)    
    }

    loginUser (email, password) {
        validatetext (email, 'email')
        validatetext (password, 'password')
    
        const user = findUserByEmail(email)
    
        if (!user || user.password !== password)
            throw new Error ('Wrong Credentials')
    
        this.loggedInEmail = email
    }
    
    logoutUSer () {
        this.loggedInEmail = null
    }
    
    retrieveUSer() {
        const user = findUserByEmail (this.loggedInEmail)
    
        if (!user)
            throw new Error ('User not found')
    
            return user
    }
    
    changeUserEmail (newEmail, newEmailConfirm, password) {
        validatetext (newEmail, 'new email')
        validatetext (newEmailConfirm, 'new email confirm')
        validatetext (password, 'password')
    
        const user = findUserByEmail (this.loggedInEmail)
    
        if (!user || user.password !== password)
            throw new Error ('Wrong credentials')
    
        if (newEmail !== newEmailConfirm)
            throw new Error (' New email and its confirmation do not match')
    
            modifyUserEmail(this.loggedInEmail, newEmail)
    
            this.loggedInEmail = newEmail
    }
    
    changeUserPassword (newPassword, newPasswordConfirm, password) {
        validatetext (newPassword, 'New password')
        validatetext (newPasswordConfirm, 'New password confirm')
        validatetext (password, 'password')
    
        const user = findUserByEmail (this.loggedInEmail)
    
        if (!user || user.password !== password)
            throw new Error ('Wrong credentials')
    
        if (newPassword !== newPasswordConfirm)
            throw new Error ('New password and its confirmation do not match')
    
        modifyUserPassword  (this.loggedInEmail, newPassword)
    }
    
    retrievePosts () {
        const user = findUserByEmail (this.loggedInEmail)
    
        if (!user)
            throw new Error ('User not found')
    
            return getPosts
    }
    
    publishPosts (image, text) {
        validatetext (image, 'image')
        validatetext (text, 'text')
    
        createPost (this.loggedInEmail, image, text)
    }
}

