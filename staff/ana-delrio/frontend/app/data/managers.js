// funciones que manejan datos

function createUser(name, email, password) {
    const user = new User(name, email, password)

    db.users.push(user)
}

function cloneUser(user) {
    // Verificamos si el parámetro 'user' es una instancia de la clase 'User'. Si no lo es, lanza un error de tipo
    if (!(user instanceof User)) throw new TypeError('user is not a User')

    // Creamos y devolvemos una nueva instancia de la clase 'User' utilizando los datos del usuario proporcionado.
    // Esto lo hacemos para clonar al usuario y devolver una nueva instancia con los mismos datos
    return new User(user.name, user.email, user.password)
}

function findUserIndexByEmail(email) {
    // Utilizamos el método `findIndex` en la matriz de usuarios en la base de datos (db.users)
    // El método `findIndex` busca un elemento en la matriz que cumple con la condición definida en la función proporcionada
    var index = db.users.findIndex(function (user) { return user.email === email })
    // La función de búsqueda recibe un parámetro `user` que representa cada elemento en la matriz
    // La condición verifica si el campo `email` del usuario es igual al `email` proporcionado como argumento

    // Devuelve el índice del usuario encontrado o -1 si no se encontró ningún usuario con el correo electrónico dado.
    return index
}

function findUserByIndex(index) {
    // Verificamos si el parámetro 'index' es de tipo número, de lo contrario lanza un error de tipo
    if (typeof index !== 'number') throw new TypeError('index is not a number')
    // Verificamos si el valor de 'index' es menor que 0, y si es así, lanza un error de rango
    if (index < 0) throw new RangeError('index lower than 0')

    // Obtenemos el usuario en la posición 'index' de la matriz 'db.users'
    const user = db.users[index]

    // Si se encuentra un usuario en la posición 'index', devuelve una copia (clon) del usuario utilizando la función 'cloneUser'
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