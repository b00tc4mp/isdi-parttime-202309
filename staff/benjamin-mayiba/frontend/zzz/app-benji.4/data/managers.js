function createUser(name, email, password) {
    const user = new User(generateId(), name, email, password)

    db.users.push(user)
}

function cloneUser(user) {
    if (!(user instanceof User)) throw new TypeError('user is not a User')

    return new User(user.id, user.name, user.email, user.password)
}

function findUserIndexById(id) {
    validateText(id, 'user id')

    const index = db.users.findIndex(function (user) { return user.id === id })

    return index
}

function findUserByEmail(email) {
    validateText(email, 'user email')

    const user = db.users.find(function (user) { return user.email === email })

    return user
}

function findUserById(id) {
    validateText(id, 'user id')

    const user = db.users.find(user => user.id === id)

    if (user)
        return cloneUser(user)

    return null
}

function updateUser(user) {
    if (!(user instanceof User)) throw new TypeError('user is not a User')

    const index = findUserIndexById(user.id)

    db.users[index] = cloneUser(user)
}

function clonePost(post) {
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')

    return new Post(post.id, post.author, post.image, post.text, post.likes.map(email => email))
}

function getPosts() {
    return db.posts.map(clonePost)
}

function createPost(userId, image, text) {
    const post = new Post(generateId(), userId, image, text, [])

    db.posts.push(post)
}

function findPostById(id) {
    validateText(id, 'post id')

    const post = db.posts.find(post => post.id === id)

    if (post)
        return clonePost(post)

    return null
}

function findPostIndexById(id) {
    validateText(id, 'post id')

    const index = db.posts.findIndex(post => post.id === id)

    return index
}

function updatePost(post) {
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')

    const index = findPostIndexById(post.id)

    db.posts[index] = clonePost(post)
}

// TO DO

function deletePostById(id) {
    const index = findPostIndexById(id)
    db.posts.splice(index, 1)
}

/*
TODO collection abstraction
class Collection {
    constructor() {}
    create() {}
    clone() {}
    findIndexById() {}
    findById() {}
    update() {}
}
class UserCollection extends Collection {
    findByEmail() {}
}
class PostCollection extends Collection {
    getAll() {}
}
*/