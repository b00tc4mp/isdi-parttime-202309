function createUser(name, email, password) {
    const user = new User(name, email, password)

    db.users.push(user)
}

function cloneUser(user) {
    if (!(user instanceof User)) throw new TypeError('user is not a User')

    return new User(user.name, user.email, user.password)
}

function findUserIndexByEmail(email) {
    var index = db.users.findIndex(function (user) { return user.email === email })

    return index
}

function findUserByIndex(index) {
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    if (index < 0) throw new RangeError('index lower than 0')

    const user = db.users[index]

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

    // añadimos el id en primer lugar 
    return new Post(post.id, post.author, post.image, post.text, post.likes.map(email => email))
}

function getPosts() {
    return db.posts.map(clonePost)
}

function createPost(email, image, text) {
    const post = new Post(generateId(), email, image, text, [])

    db.posts.push(post)
}

function findPostById(postId) {
    if (typeof postId !== 'string') throw new TypeError('post id is not a string')
    // lo eliminamos porque no e sun numérico
    // if (index < 0) throw new RangeError('index lower than 0')

    // buscamos el post en el array con un find
    const post = db.posts.find(post => post.id === postId)

    if (post)
        return clonePost(post)

    return null
}

// buscamos el índice del post con el id
function findPostIndexById(postId) {
    if (typeof postId !== 'string') throw new TypeError('post id is not a string')

    // esto nos trae en índice del post
    const index = db.posts.findIndex(post => post.id === postId)

    return index
}


function updatePost(post) {
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')

    const index = findPostIndexById(post.id)

    // actualizamos el post completamente
    db.posts[index] = clonePost(post)
}