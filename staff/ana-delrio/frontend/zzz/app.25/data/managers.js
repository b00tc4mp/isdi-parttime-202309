function createUser(name, email, password) {
    const user = new User(name, email, password)

    db.users.push(user)
}

function cloneUser(user) {
    // La expresión user instanceof User evalúa si user pertenece a la clase User
    if (!(user instanceof User)) throw new TypeError('user is not a User')

    return new User(user.name, user.email, user.password)
}

// con el email, obtenemos el index
function findUserIndexByEmail(email) {
    // toma un parámetro user y compara el valor de la propiedad email del objeto user con el valor de la variable email
    // Devolverá true si hay una coincidencia y false si no hay coincidencia.
    const index = db.users.findIndex(function (user) { return user.email === email })

    return index
}

// con el index, buscamos el mail
function findUserByIndex(index) {
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    if (index < 0) throw new RangeError('index lower than 0')

    // Accedemos al usuario en la posición index dentro del array db.users
    const user = db.users[index]

    // Si se encuentra un usuario en la posición index, retorna una copia del usuario usando la función cloneUser
    if (user)
        return cloneUser(user)

    return null
}

function updateUser(index, user) {
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    if (index < 0) throw new RangeError('index lower than 0')
    if (!(user instanceof User)) throw new TypeError('user is not a User')

    db.users[index] = cloneUser(user)
}

function clonePost(post) {
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')

    return new Post(post.author, post.image, post.text, post.likes.map(email => email))
}

function getPosts() {
    return db.posts.map(clonePost)
}

function createPost(email, image, text) {
    const post = new Post(email, image, text, [])

    db.posts.push(post)
}

function findPostByIndex(index) {
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    if (index < 0) throw new RangeError('index lower than 0')

    const post = db.posts[index]

    if (post)
        return clonePost(post)

    return null
}

function updatePost(index, post) {
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    if (index < 0) throw new RangeError('index lower than 0')
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')


    db.posts[index] = clonePost(post)
}