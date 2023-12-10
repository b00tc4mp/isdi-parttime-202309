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

class Collection {
    constructor() {

    }

    clone() {

    }

    create() {
       
    }

    findById() { 
       
    }

    findIndexById() {
        
    }

    update() {

    }
}

class UserCollection extends Collection {
    findUserByEmail () {
       
    }
}

class PostCollection extends Collection {
    getPost() {

    }
}