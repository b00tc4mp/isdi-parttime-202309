function createUser(name, email, password) {
    const user = new User(generateId(), name, email, password)

    db.users.push(user)
}

function cloneUser(user) {
    if(!(user instanceof User)) throw new TypeError('user is not a User')

    return new User(user.id, user.name, user.email, user.password)
}

function findUserIndexById(id) {
    validateText(id, 'user id')

    const index = db.users.findIndex(function (user) {return user.id === id})

    return index
}

function findUserByEmail(email) {
    validateText(email, 'user email')

    const user = db.users.find(function (user) {return user.email === email})

    return user
}

function findUserById (id) {
    validateText(id, 'user id')
    
    const user = db.users.find(user => user.id === id)

    if (user) 
        return cloneUser(user)

    return null
}

function updateUser(user) {
    if(!(user instanceof User)) throw new TypeError('user is not a User')

    const index = findUserIndexById(user.id)

    db.users[index] = cloneUser(user)
}

function clonePost(post) {
    if(!(post instanceof Post)) throw new TypeError('post is not a Post')

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
function updatePost(post){
    if (!(post instanceof Post)) throw new TypeError('post is not a Post')

    const index = findPostIndexById(post.id)
    
    db.posts[index] = clonePost(post)
}

function deletePostById(id) {
    const index = findPostIndexById(id)
    
    db.posts.splice(index, 1)
}



// DONE

class Collection {
    constructor(clazz, collection) {
        this.clazz = clazz,
        this.collection = collection
    }

    clone(document) { 
        var copy = new this.clazz
        
        for(var key in document) {
            var value = document[key]

            if(value instanceof Array)
                copy[key] = [...value]
            else if (value instanceof Object)
                copy[key] = [...value]
            else    
                copy[key] = document[key]
        }

        return copy
    }

    insert(document) {
        const documentCopy = this.clone(document)

        documentCopy.id = generateId()

        this.collection.push(documentCopy)
    }

    findIndexById(id) {
        validateText(id, `${this.clazz.name} id`)

        return this.collection.findIndex(document => document.id === id)
    }

    findById(id) {
        validateText(id, `${this.clazz.name} id`)

        return this.collection.find(document => document.id) || null
    }

    update(document) {
        if(!(document instanceof this.clazz)) throw new TypeError(`document is not a ${this.clazz.name}`)

        const index = this.findIndexById(document.id)

        if (index < 0) 
            throw new Error(`${this.clazz.name} not found`)

        this.collection[index] = this.clone(document)
    }
}

// TEST

var db2 = {}

db2.users = new Collection(User, db.users)

var user = new User(null, 'Ada Love', 'ada@love.com', 123123)

db2.users.insert(user)

db2.posts = new Collection(Post, db.posts)

var post = new Post(null, db2.users.collection[db2.users.collection.length -1].id, "http://image.com", 'hola mundo', [])

db2.posts.insert(post)

