class Logic {
    constructor() {
        this.userId = null
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

        // asignamosal objeto actual el ID del usuario
        this.userId = user.id
    }

    logoutUser() {
        this.userId = null
    }

    retrieveUser() {
        const user = findUserById(this.userId)

        if (!user)
            throw new Error('user not found')

        // añadimos esto porque no nos interesa que nos devuelva la contraseña 
        delete user.password

        return user
    }

    changeUserEmail(newEmail, newEmailConfirm, password) {
        validateText(newEmail, 'new email')
        validateText(newEmailConfirm, 'new email confirm')
        validateText(password, 'password')

        const user = findUserById(this.userId)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newEmail !== newEmailConfirm)
            throw new Error('new email and its confirmation do not match')

        user.email = newEmail

        updateUser(user)
    }

    changeUserPassword(newPassword, newPasswordConfirm, password) {
        validateText(newPassword, 'new password')
        validateText(newPasswordConfirm, 'new password confirm')
        validateText(password, 'password')

        const index = findUserById(this.userId)

        const user = findUserByIndex(index)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newPassword !== newPasswordConfirm)
            throw new Error('new password and its confirmation do not match')

        user.password = newPassword

        updateUser(index, user)
    }

    retrievePosts() {
        const user = findUserById(this.userId)

        if (!user)
            throw new Error('user not found')

        const posts = getPosts()

        posts.forEach(post => {
            post.isFav = post.likes.includes(this.userId)

            const user = findUserById(post.author)

            post.author = user.name
        })

        return posts
    }

    publishPost(image, text) {
        validateText(image, 'image')
        validateText(text, 'text')

        createPost(this.userId, image, text)
    }

    toggleLikePost(postId) {
        validateText(postId, 'post id')

        // si esto no lo encuentra, devolverá un null (post = null)
        const post = findPostById(postId)

        // si el post se borra, tenemos que controlar ese error
        if (!post)
            throw new Error('post not found')

        // Buscar el índice del email del usuario actual en el array de "likes"
        // Si this.userId está en post.likes, likeIndex contendrá el índice de la posición 
        // Si this.userId no está en post.likes, likeIndex contendrá -1
        const likeIndex = post.likes.indexOf(this.userId)

        // Si el email del usuario no está en el array de "likes" (likeIndex < 0),
        // agregar el email a la lista de "likes". De lo contrario quitar el "like"
        if (likeIndex < 0)
            post.likes.push(this.userId)
        else
            post.likes.splice(likeIndex, 1)

        updatePost(post)
    }

} 