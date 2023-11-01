// REGISTER LOGIC


class Logic {
    constructor() {
        this.loggedInEmail = null
    }

    // REGISTER USER
    registerUser(name, email, password) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')
    
        var user = findUserByEmail(email)
    
        if (user)
            throw new Error('user already exists')
    
        createUser(name, email, password)
    }

    // LOGIN & AUTHENTICATE
    loginUser(email, password) {
        validateText(email, 'email')
        validateText(password, 'password')
    
        var user = findUserByEmail(email)
    
        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        this.loggedInEmail = email
    }
    
    // LOGIN LOGIC
    retrieveUser() {
        var user = findUserByEmail(this.loggedInEmail)
    
        if (!user)
            throw new Error('user not found')
    
        return user
    }
    
    // FUNCION COMPROBAR NEW EMAIL
    changeUserEmail(newEmail, confirmNewEmail, password) {
        validateText(newEmail, 'new email')
        validateText(confirmNewEmail, 'new email confirm')
        validateText(password, 'new email')
    
        var user = findUserByEmail(this.loggedInEmail)
    
        if (!user || user.password !== password) {
            throw new Error('wrong credentials')
        }

        if (newEmail !== confirmNewEmail) {
            throw new Error('New email and your confirm doesnt match each other')
        }
    
        modifyUserEmail(this.loggedInEmail, newEmail)

        // PREGUNTAR A MANU (?) Ya tenemos modifyUserEmail!

        this.loggedInEmail = newEmail
    }
    
    // FUNCIÓN COMPROBAR NEW PASSWORD
    changeUserPassword(password, newPassword, againNewPassword) {
        validateText(password, 'password')
        validateText(newPassword, 'new password')
        validateText(againNewPassword, 'the repeat password')
    
        var user = findUserByEmail(this.loggedInEmail)
    
        if (!user || user.password !== password) {
            throw new Error('wrong credentials')
        }
        if (newPassword !== againNewPassword) {
            throw new Error('New pass and his confirmation are not correct. Try again') 
        }
    
        modifyUserPassword(this.loggedInEmail, newPassword)
    }
    
    retrievePosts() {
        var user = findUserByEmail(this.loggedInEmail)
    
        if(!user) {
            throw new Error('User not found!')
        }
    
        return getPosts()
    }
    
    publishPost(image, text) {
        validateText(image, 'image')
        validateText(text, 'text')
    
        createPost(this.loggedInEmail, image, text)
    }

    logoutUser() {
        this.loggedInEmail = null
    }
}