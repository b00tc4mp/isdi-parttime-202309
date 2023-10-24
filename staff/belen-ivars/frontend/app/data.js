var db = {}

db.users = [
    {
        name: 'Delicada Gandia',
        email: 'delicada@gandia.com',
        password: '123123'
    },
    {
        name: 'Tio Sangonera',
        email: 'tio@sangonera.com',
        password: '123123'
    }
]

db.posts = [
    {
        author: 'delicada@gandia.com',
        image: 'https://www.miravalencia.com/wp-content/uploads/2017/01/delicagandia.jpg',
        text: 'In my honor!'
    },
    {
        author: 'tio@sangonera.com',
        image: 'https://i.pinimg.com/564x/92/05/d1/9205d173c55d72edebb34d91e9a1be55.jpg',
        text: 'Nice day'
    },
    {
        author: 'delicada@gandia.com',
        image: 'https://ladelicadegandia.monduv.com/wp-content/uploads/2023/01/Ladelica-01-979x1024.jpg',
        text: 'Not bad'
    }
]

function createUser(name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    db.users.push(user)
}

function findUserByEmail(email) {
    var user = db.users.find(function (user) { return user.email === email })

    if (user) {
        var userCopy = {}

        userCopy.name = user.name
        userCopy.email = user.email
        userCopy.password = user.password

        return userCopy

    }
    return null
}

function modifyUserEmail(email, newEmail) {
    var user = db.users.find(function (user) { return user.email === email })
    user.email = newEmail
}

function modifyUserPassword(email, newPassword) {
    var user = db.users.find(function (user) { return user.email === email })

    user.password = newPassword
}

function getPosts() {
    return db.posts.map(function (post) {
        var postCopy = {}

        postCopy.author = post.author
        postCopy.image = post.image
        postCopy.text = post.text

        return postCopy
    })
}

function createPost(email, image, text) {
    var post = {}

    post.author = loggedInEmail
    post.image = image
    post.text = text

    db.posts.push(post)

}