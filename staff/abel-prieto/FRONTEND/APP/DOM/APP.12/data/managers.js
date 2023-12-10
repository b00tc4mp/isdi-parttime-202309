
// - - - - - - - - - - - [USERS] - - - - - - - - - - - - 

// CREATE USERS
function createUser(name, email, password) {
    const user = new User(name, email, password)

    db.users.push(user)
}

// AUTENTICATE USER
function findUserIndexByEmail(email) {
    validateText(email, 'email')
    
    const index = db.users.findIndex(function(user) {return user.email === email})
   
    return index
}

// SEARCH USER BY INDEX
function findUserByIndex(index) {
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    if (index < 0) throw new RangeError('index lowe than 0')

    const user = db.users[index]

    if (user) {
        return cloneUser(user)
    }

    return null
}

// COPY-CLONE USER
function cloneUser(user) {
    if (!(user instanceof User)) throw new TypeError('User is not a user')

    return new User(user.name, user.email, user.password)
}

// SETTINGS - UPDATE USER
function updateUser(index, user) {
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    if (index < 0) throw new RangeError('index lowe than 0')
    if (!(user instanceof User)) throw new TypeError('User is not a user')

    db.users[index] = cloneUser(user)
}


// - - - - - - - - - - - [POSTS] - - - - - - - - - - - - 

// CREATE POST
function createPost(email, image, text) {
    const newPost = new Post(email, image, text, [])

    db.posts.push(newPost)
}

// COPY-CLONE POST
function clonePost(post) {
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')
    
    return new Post(post.author, post.image, post.text, post.likes.map(email => email))
}

// CLONE & RETURN COPY POST
function getPosts() {
    return db.posts.map(clonePost)
}

// FIND INDEX POST
function findPostByIndex(index) {
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    if (index < 0) throw new RangeError('index lowe than 0')

    const post = db.posts[index]

    if (post) {
        return clonePost(post)
    }

    return null
}

// UPDATE POST
function updatePost(index, post) {
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    if (index < 0) throw new RangeError('index lowe than 0')
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')

    db.posts[index] = clonePost(post)
}