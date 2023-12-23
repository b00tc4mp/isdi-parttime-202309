class Logic {
    constructor() {
        this.loggedInEmail = null
    }

    registerUser(name, email, password) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')

        const index = findUserIndexByEmail(email)

        if (index > -1)
            throw new Error('user already exists')

        createUser(name, email, password)
    }

    loginUser(email, password) {
        validateText(email, 'email')
        validateText(password, 'password')

        // Encontramos el índice del usuario en la base de datos que coincide con el 'email' proporcionado
        const index = findUserIndexByEmail(email)

        if (index < 0)
            throw new Error('wrong credentials')

        const user = findUserByIndex(index)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        this.loggedInEmail = email
    }

    logoutUser() {
        this.loggedInEmail = null
    }

    retrieveUser() {
        const index = findUserIndexByEmail(this.loggedInEmail)

        if (index < 0)
            throw new Error('user not found')

        const user = findUserByIndex(index)

        return user
    }

    changeUserEmail(newEmail, newEmailConfirm, password) {
        validateText(newEmail, 'new email')
        validateText(newEmailConfirm, 'new email confirm')
        validateText(password, 'password')

        const index = findUserIndexByEmail(this.loggedInEmail)

        const user = findUserByIndex(index)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newEmail !== newEmailConfirm)
            throw new Error('new email and its confirmation do not match')

        user.email = newEmail

        updateUser(index, user)

        const posts = getPosts()

        posts.forEach((post, index) => {
            if (post.author === this.loggedInEmail) {
                post.author = newEmail

                updatePost(index, post)
            }
        })

        this.loggedInEmail = newEmail
    }

    changeUserPassword(newPassword, newPasswordConfirm, password) {
        validateText(newPassword, 'new password')
        validateText(newPasswordConfirm, 'new password confirm')
        validateText(password, 'password')

        const index = findUserIndexByEmail(this.loggedInEmail)

        const user = findUserByIndex(index)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newPassword !== newPasswordConfirm)
            throw new Error('new password and its confirmation do not match')

        user.password = newPassword

        updateUser(index, user)
    }

    retrievePosts() {
        // Encontramos el índice del usuario actual por su dirección de correo electrónico
        const index = findUserIndexByEmail(this.loggedInEmail)

        // Si no se encuentra el usuario, lanzamos un error
        if (index < 0)
            throw new Error('wrong credentials')

        // Obtenemos el usuario correspondiente al índice encontrado
        const user = findUserByIndex(index)

        // Obtenemos una copia de todos los posts disponibles 
        const posts = getPosts()

        // para cada post, hacer un forEach
        posts.forEach(post =>
            // Asignamos a la propiedad 'isFav' de cada post si el usuario actual (this.loggedInEmail) ha dado 'me gusta' al post
            post.isFav = post.likes.includes(this.loggedInEmail))
        // Dentro del cuerpo de la función flecha, se está llevando a cabo una operación en cada elemento de la matriz post
        // La propiedad isFav del objeto post se está actualizando con un valor booleano
        // que indica si this.loggedInEmail (la dirección de correo electrónico del usuario actual) está incluida en la matriz likes del objeto post

        return posts
    }

    publishPost(image, text) {
        validateText(image, 'image')
        validateText(text, 'text')

        createPost(this.loggedInEmail, image, text)
    }

    toggleLikePost(postIndex) {
        validateNumber(postIndex)

        const post = findPostByIndex(postIndex)

        const likeIndex = post.likes.indexOf(this.loggedInEmail)

        if (likeIndex < 0)
            post.likes.push(this.loggedInEmail)
        else
            post.likes.splice(likeIndex, 1)

        updatePost(postIndex, post)
    }
}