class Logic {
    constructor() {
        // ponemos null porque al principio no hay ningún usuario conectado 
        this.loggedInEmail = null
    }
    // como ya estamos vinculando loggedInEmail en el constructor, ya no dbeeíamos de pedir cada vez el email
    // lo estamos guardando en la instancia de lógica

    registerUser(name, email, password) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')

        const user = findUserByEmail(email)

        if (user)
            throw new Error('user already exists')

        createUser(name, email, password)
    }

    loginUser(email, password) {
        validateText(email, 'email')
        validateText(password, 'password')

        const user = findUserByEmail(email)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        this.loggedInEmail = email
    }

    // esto lo ponemos porque queremos que loggedInEmail sea null de nuevo, lo limpiemos
    // de forma que no haya nadie conectado
    logoutUser() {
        this.loggedInEmail = null
    }

    retrieveUser() {
        const user = findUserByEmail(this.loggedInEmail)

        if (!user)
            throw new Error('user not found')

        return user
    }

    changeUserEmail(newEmail, newEmailConfirm, password) {
        validateText(newEmail, 'new email')
        validateText(newEmailConfirm, 'new email confirm')
        validateText(password, 'password')

        const user = findUserByEmail(this.loggedInEmail)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newEmail !== newEmailConfirm)
            throw new Error('new email and its confirmation do not match')

        modifyUserEmail(this.loggedInEmail, newEmail)

        // actualizamos el email en la misma instancia de logic
        this.loggedInEmail = newEmail
    }

    changeUserPassword(newPassword, newPasswordConfirm, password) {
        validateText(newPassword, 'new password')
        validateText(newPasswordConfirm, 'new password confirm')
        validateText(password, 'password')

        const user = findUserByEmail(this.loggedInEmail)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newPassword !== newPasswordConfirm)
            throw new Error('new password and its confirmation do not match')

        modifyUserPassword(this.loggedInEmail, newPassword)
    }

    retrievePosts() {
        const user = findUserByEmail(this.loggedInEmail)

        if (!user)
            throw new Error('user not found')

        return getPosts()
    }

    publishPost(image, text) {
        validateText(image, 'image')
        validateText(text, 'text')

        createPost(this.loggedInEmail, image, text)
    }
}