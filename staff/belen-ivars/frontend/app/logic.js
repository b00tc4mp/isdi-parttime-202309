class Logic {
    constructor() {
        this.loggedInEmail = null
    }

    registerUser(name, email, password) {
        validateText(name, 'Name')
        validateText(email, 'Email')
        validateText(password, 'Password')

        const user = findUserByEmail(email)

        if (user)
            throw new Error('User already exists')

        createUser(name, email, password)
    }

    loginUser(email, password) {
        validateText(email, 'Email')
        validateText(password, 'Password')

        const user = findUserByEmail(email)

        if (!user || user.password !== password)
            throw new Error('Wrong credentials')

        this.loggedInEmail = email
    }

    logoutUser() {
        this.loggedInEmail = null
    }

    retrieveUser() {
        const user = findUserByEmail(this.loggedInEmail)

        if (!user)
            throw new Error('User not found')

        return user
    }

    changeUserEmail(newEmail, newEmailConfirm, password) {
        validateText(newEmail, 'new email')
        validateText(newEmailConfirm, 'new email confirm')
        validateText(password, 'password')

        const user = findUserByEmail(this.loggedInEmail)

        if (!user || user.password !== password)
            throw new Error('Wrong credentials')

        if (newEmail !== newEmailConfirm)
            throw new Error('new email and its confirmation do not match')

        modifyUserEmail(this.loggedInEmail, newEmail)

        this.loggedInEmail = newEmail
    }

    changeUserPassword(newPassword, newPasswordConfirm, password) {
        validateText(newPassword, 'new password')
        validateText(newPasswordConfirm, 'new password confirm')
        validateText(password, 'password')

        const user = findUserByEmail(this.loggedInEmail)

        if (!user || user.password !== password)
            throw new Error('Wrong credentials')

        if (newPassword !== newPasswordConfirm)
            throw new Error('new password and its confirmation do not match')

        modifyUserPassword(this.loggedInEmail, newPassword)
    }

    retrievePosts() {
        const user = findUserByEmail(this.loggedInEmail)
        if (!user)
            throw new Error('User not found')

        return getPosts()
    }

    publishPost(image, text) {
        validateText(image, 'image')
        validateText(text, 'text')

        createPost(this.loggedInEmail, image, text)
    }
}