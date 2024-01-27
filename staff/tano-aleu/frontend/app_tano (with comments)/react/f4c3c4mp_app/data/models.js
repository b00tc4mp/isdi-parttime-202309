class User {
    constructor(id, name, email, password, favs) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.favs = favs
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

class CreditCard {
    constructor(id, user, fullName, number, expirationDate) {
        this.id = id
        this.user = user
        this.fullName = fullName
        this.number = number
        this.expirationDate = expirationDate
    }
}

// - - INFO - -

//Ejemplo, la clase User define los atributos id, name, email, password y favs que tendrán los objetos de tipo User. De esta manera, cuando se cree un nuevo objeto de tipo User, se le asignarán estos atributos y se podrán acceder a ellos a través de las propiedades del objeto.

// Estos modelos son útiles para mantener una estructura coherente y consistente en toda la aplicación, lo que hace que el código sea más fácil de entender y mantener. Además, los modelos también pueden ser utilizados para realizar validaciones en los datos de entrada y salida de la aplicación.