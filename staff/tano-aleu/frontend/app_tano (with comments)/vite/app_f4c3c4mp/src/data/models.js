// Clase que representa un usuario en el sistema
class User {
    
    // Constructor que inicializa los atributos de la clase
    constructor(id, name, email, password, favs, birthdate, gender) {
        this.id = id; // Identificador único del usuario
        this.name = name; // Nombre del usuario
        this.email = email; // Dirección de correo electrónico del usuario
        this.password = password; // Contraseña del usuario
        this.favs = favs; // Lista de identificadores de publicaciones favoritas del usuario
        this.birthdate = birthdate; // Nuevo campo para la fecha de nacimiento del usuario
        this.gender = gender; // Nuevo campo para el género del usuario
    }
}

// Clase que representa una publicación en el sistema
class Post {

    // Constructor que inicializa los atributos de la clase
    constructor(id, author, image, text, likes) {
        this.id = id; // Identificador único de la publicación
        this.author = author; // Identificador del autor de la publicación
        this.image = image; // URL de la imagen asociada a la publicación
        this.text = text; // Texto de la publicación
        this.likes = likes; // Lista de identificadores de usuarios que han dado "like" a la publicación
    }
}

// Clase que representa una tarjeta de crédito asociada a un usuario en el sistema
class CreditCard {

    // Constructor que inicializa los atributos de la clase
    constructor(id, user, fullName, number, expirationDate) {
        this.id = id; // Identificador único de la tarjeta de crédito
        this.user = user; // Identificador del usuario al que pertenece la tarjeta
        this.fullName = fullName; // Nombre completo en la tarjeta
        this.number = number; // Número de la tarjeta de crédito
        this.expirationDate = expirationDate; // Fecha de vencimiento de la tarjeta
    }
}

// Exporta las clases para que puedan ser utilizadas en otros archivos
export {
    User,
    Post,
    CreditCard
};
