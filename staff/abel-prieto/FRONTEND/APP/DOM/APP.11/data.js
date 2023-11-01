// DATABASE

var db = {}

db.users = [
    {
        name: 'Wendy Darling',
        email: 'wendy@darling.com',
        password: '123123123'
    },
    {
        name: 'Peter Pan',
        email: 'peter@pan.com',
        password: '123123123'
    },
    {
        name: 'NanoPucela',
        email: 'abelpriem94@hotmail.com',
        password: '1234'
    }
]

db.posts = [
    {
        author: 'peter@pan.com',
        image: 'https://www.semana.com/resizer/U2dYNVlzGiHK5T-EV_jhACYU-Ow=/1920x1080/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JO53UT7DKVGVBNXQ5F37YJJZ3A.jpg',
        text: 'my granpa!',
        likes: [],
    },
    {
        author: 'wendy@darling.com',
        image: 'https://i.etsystatic.com/27087751/r/il/45a140/3041590242/il_fullxfull.3041590242_o4qq.jpg',
        text: 'my sweety!',
        likes: [],
    },
]

// CREATE USERS

function createUser(name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    db.users.push(user)
}

// AUTENTICATE USER

function findUserByEmail(email) {
    validateText(email, 'email')
    
    var user = db.users.find(function(user) {return user.email === email})

    if (user) {
        var userCopy = {} // Copia de db (base de datos)

        userCopy.name = user.name
        userCopy.email = user.email
        userCopy.password = user.password

        return userCopy
    }   

    return null
}

function findUserByPassword(password) {
    validateText(password, 'password')

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.password === password)
            return user
    }

    return null
}

// SETTINGS

function modifyUserEmail(email, newEmail) {
    var user = db.users.find(function(user) {return user.email === email})
    // var user = users.find(user => user.email === email)

    user.email = newEmail
}

function modifyUserPassword(email, newPassword) {
    var user = db.users.find(function(user) {return user.email === email})

    user.password = newPassword
}

// POST

function createPost(email, image, text) {
    var newPost = {}

    newPost.author = email
    newPost.image = image
    newPost.text = text
    newPost.likes = []

    db.posts.push(newPost)
}

function clonePost(post) {
        var postCopy = {}

        postCopy.author = post.author
        postCopy.image = post.image
        postCopy.text = post.text
        
        const likes = post.likes.map(email => email)

        postCopy.likes = likes

        return postCopy
}

function getPosts() {
    return db.posts.map(clonePost)
}

function findPostByIndex(index) {
    var post = db.posts[index]

    if (post) {
        return clonePost(post)
    }

    return null
}

function updatePost(index, post) {
    db.posts[index] = clonePost(post)
}