class Logic {
    constructor() {
        this.loggedInEmail = null
    }

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

    // creamos el toggleLike para los likes, para poner o quitar corazones
    toggleLikePost(postIndex) {
        // lo primero de todo validamos que el postIndex es un número en validator
        validateNumber(postIndex)

        // nos vamos a data para la buscar el post usando el index
        // creamos una copia de seguridad
        const post = findPostByIndex(postIndex)

        // si yo estoy dentro del array de likes
        const likeIndex = post.likes.indexOf(this.loggedInEmail)

        if (likeIndex < 0)
            // ¿?
            post.likes.push(this.loggedInEmail)
        else
            // aprovecha el splice, para quitar un elemento de ese array
            post.likes.splice(likeIndex, 1)

        // nos vamos a la BD para actualizar el post, que lo busque y lo actualice 
        updatePost(postIndex, post)
    }
} 