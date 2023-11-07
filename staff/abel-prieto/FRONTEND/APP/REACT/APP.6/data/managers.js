
// - - - - - - - - - - - [USERS] - - - - - - - - - - - - 

// CREATE USERS
function createUser(name, email, password) {
    const user = new User(generateId(), name, email, password)

    db.users.push(user)
}

// SEARCH USER BY EMAIL
function findUserByEmail(email) {
    validateText(email, 'email')

    const user = db.users.find((user) => user.email === email)
   
    return user
}

// SEARCH INDEX USER
function findUserIndexById(userId) {
    validateText(userId, 'user id')
    
    const index = db.users.findIndex((user) => user.id === userId)
   
    return index
}

// SEARCH USER BY ID
function findUserById(userId) {
    validateText(userId, 'user id')

    const user = db.users.find(user => userId === user.id)

    if (user) {
        return cloneUser(user)
    }

    return null
}

// COPY-CLONE USER
function cloneUser(user) {
    if (!(user instanceof User)) throw new TypeError('User is not a user')

    return new User(user.id, user.name, user.email, user.password)
}

// SETTINGS - UPDATE USER
function updateUser(user) {
    if (!(user instanceof User)) throw new TypeError('User is not a user')

    const index = findUserIndexById(user.id)

    db.users[index] = cloneUser(user)
}


// - - - - - - - - - - - [POSTS] - - - - - - - - - - - - 

// CREATE POST
function createPost(userId, image, text) {
    const newPost = new Post(generateId(), userId, image, text, [])

    db.posts.push(newPost)
}

// COPY-CLONE POST
function clonePost(post) {
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')
    
    return new Post(post.id, post.author, post.image, post.text, post.likes.map(email => email))
}

// CLONE & RETURN COPY POST
function getPosts() {
    return db.posts.map(clonePost)
}

// FIND POST
function findPostById(postId) {
    validateText(postId, 'post id')

    const post = db.posts.find(post => postId === post.id)

    if (post) {
        return clonePost(post)
    }

    return null
}

// FIND INDEX POST
function findPostIndexById(postId) {
    validateText(postId, 'post id')

    const index = db.posts.findIndex(post => post.id === postId)

    return index
}

// UPDATE POST
function updatePost(post) {
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')

    const index = findPostIndexById(post.id)

    db.posts[index] = clonePost(post)
}