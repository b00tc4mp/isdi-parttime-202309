// las clases son una forma de crear objetos y organizar la lógica en la programación orientada a objetos en JavaScript

class User {
    constructor(id, name, email, password) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }
}

class Post {
    constructor(id, author, image, text, likes) {
        this.id = id
        this.author = author
        this.image = image
        this.text = text
        this.likes = likes
    }
}