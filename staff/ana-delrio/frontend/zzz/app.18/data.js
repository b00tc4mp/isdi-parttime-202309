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
    }
]

db.posts = [
    {
        author: 'peter@pan.com',
        image: 'https://m.media-amazon.com/images/M/MV5BMzIwMzUyYTUtMjQ3My00NDc3LWIyZjQtOGUzNDJmNTFlNWUxXkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_FMjpg_UX1000_.jpg',
        text: 'my granpa!',
        // creamos un array de likes
        likes: []
    },
    {
        author: 'wendy@darling.com',
        image: 'https://ih1.redbubble.net/image.2230349250.8377/pp,840x830-pad,1000x1000,f8f8f8.jpg',
        text: 'my sweety!',
        // Peter le ha dado like
        likes: ['peter@pan.com']
    },
    {
        author: 'peter@pan.com',
        image: 'https://m.media-amazon.com/images/I/71JZegDmwbL.jpg',
        text: 'i love ü baby',
        // Wendy le ha dado a megusta 
        likes: ['wendy@darling.com']
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

function clonePost(post) {
    var postCopy = {}

    postCopy.author = post.author
    postCopy.image = post.image
    postCopy.text = post.text

    // Creamos una copia del array 'likes' dentro del objeto 'post', y claro no es como antes que copiápamos objetos, ahora queremos copiar un array con todas sus propiedades
    const likes = post.likes.map(email => email)

    // Asignar la copia de 'likes' que hicimos  al atributo 'likes' de un objeto 'postCopy'
    postCopy.likes = likes

    return postCopy
}

function getPosts() {
    return db.posts.map(clonePost)
}

function createPost(email, image, text) {
    var post = {}

    post.author = email
    post.image = image
    post.text = text
    // añadimos esto para que al subir una publicación aparezca el like
    post.likes = []

    db.posts.push(post)
}

// busco el post por indice
function findPostByIndex(index) {
    var post = db.posts[index]

    if (post)
        // Si lo ha encontrado que devuelva un clon, una copia
        return clonePost(post)

    return null
}

// buscamos el post en la BD y lo reemplazamos y lo mandamos a la lógica
function updatePost(index, post) {
    db.posts[index] = clonePost(post)
}   