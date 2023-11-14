class Logic {
    constructor() {
        this.sessionUserId = null
    }

    registerUser(name, email, password) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')

        const user = db.users.findByEmail(email)

        if (user)
            throw new Error('user already exists')

        db.users.insert(new User(null, name, email, password, []))
    }

    loginUser(email, password) {
        validateText(email, 'email')
        validateText(password, 'password')

        const user = db.users.findByEmail(email)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        this.sessionUserId = user.id
    }

    logoutUser() {
        this.sessionUserId = null
    }

    retrieveUser() {
        const user = db.users.findById(this.sessionUserId)

        if (!user)
            throw new Error('user not found')

        delete user.password

        return user
    }

    changeUserEmail(newEmail, newEmailConfirm, password) {
        validateText(newEmail, 'new email')
        validateText(newEmailConfirm, 'new email confirm')
        validateText(password, 'password')

        const user = db.users.findById(this.sessionUserId)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newEmail !== newEmailConfirm)
            throw new Error('new email and its confirmation do not match')

        user.email = newEmail

        db.users.update(user)
    }

    changeUserPassword(newPassword, newPasswordConfirm, password) {
        validateText(newPassword, 'new password')
        validateText(newPasswordConfirm, 'new password confirm')
        validateText(password, 'password')

        const user = db.users.findById(this.sessionUserId)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newPassword !== newPasswordConfirm)
            throw new Error('new password and its confirmation do not match')

        user.password = newPassword

        db.users.update(user)
    }

    retrievePosts() {
        // Buscamos al usuario por su ID de sesión
        const user = db.users.findById(this.sessionUserId)

        if (!user)
            throw new Error('user not found')

        // Obtenemos todas las publicaciones de la base de datos
        const posts = db.posts.getAll()

        // Iterar sobre cada publicación en la lista
        posts.forEach(post => {
            // Marcamos si el usuario actual ha dado "like" a esta publicación
            post.liked = post.likes.includes(this.sessionUserId)

            // Buscamos al autor de la publicación y reemplazar el ID del autor con su nombre
            const author = db.users.findById(post.author)
            post.author = author.name

            // Marcamos si la publicación está en la lista de favoritos del usuario actual
            post.fav = user.favs.includes(post.id)
        })
        // Devolvemos la lista de publicaciones actualizada
        return posts
    }

    publishPost(image, text) {
        validateText(image, 'image')
        validateText(text, 'text')

        db.posts.insert(new Post(null, this.sessionUserId, image, text, []))
    }

    toggleLikePost(postId) {
        validateText(postId, 'post id')

        const post = db.posts.findById(postId)

        if (!post)
            throw new Error('post not found')

        const index = post.likes.indexOf(this.sessionUserId)

        if (index < 0)
            post.likes.push(this.sessionUserId)
        else
            post.likes.splice(index, 1)

        db.posts.update(post)
    }

    toggleFavPost(postId) {
        validateText(postId, 'post id')

        const post = db.posts.findById(postId)

        if (!post)
            throw new Error('post not found')

        const user = db.users.findById(this.sessionUserId)

        if (!user)
            throw new Error('user not found')

        const index = user.favs.indexOf(post.id)

        if (index < 0)
            user.favs.push(post.id)
        else
            user.favs.splice(index, 1)

        db.users.update(user)
    }

    retrieveFavPosts() {
        // Buscamos al usuario por su ID de sesión
        const user = db.users.findById(this.sessionUserId)

        if (!user)
            throw new Error('user not found')

        // Obtenemos la lista de IDs de publicaciones marcadas co`mo favoritas por el usuario
        // y la convertimos en una lista de objetos de publicaciones

        const favs = user.favs.map(postId => db.posts.findById(postId))

        // Iteraramos sobre cada publicación en la lista
        favs.forEach(post => {
            // Marcamod si el usuario actual ha dado "like" a esta publicación
            post.liked = post.likes.includes(this.sessionUserId)

            // Buscamos al autor de la publicación y reemplazar el ID del autor con su nombre
            const author = db.users.findById(post.author)
            post.author = author.name

            // Marcamos si la publicación está en la lista de favoritos del usuario actual
            post.fav = user.favs.includes(post.id)
        })

        return favs
    }
}