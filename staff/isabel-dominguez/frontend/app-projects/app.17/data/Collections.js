class Collection {
    constructor(clazz, documents) {
        // Propiedades para almacenar el tipo de clase y los documentos
        this.__clazz__ = clazz
        this.__documents__ = documents
    }

    // Método privado para realizar una copia profunda de un documento
    __clone__(document) {
        var copy = new this.__clazz__ // Crea una nueva instancia de la clase para servir como copia

        for (var key in document) { // Itera sobre las propiedades del documento
            var value = document[key]

            if (value instanceof Array) // Verifica el tipo de valor y realiza una copia adecuada
                copy[key] = [...value]
            else if (value instanceof Date)
                copy[key] = new Date(document[key])
            else if (value instanceof Object)
                copy[key] = { ...value }
            else
                copy[key] = document[key]

        }

        return copy // Devuelve la copia profunda del documento
    }

    // Método para eliminar un documento por su ID
    deleteById(id, callback) {
        try {
            validateText(`${this.__clazz__.name} id`)

            asyncDelay(() => {
                this.__findIndexById__(id, (error, index) => {
                    if (error) {
                        callback(error)

                        return
                    }

                    if (index < 0) {
                        callback(new Error(`${this.__clazz__.name} not found`))

                        return
                    }

                    // this.__documents__.splice(index, 1)

                    callback(null, this.__documents__.splice(index, 1))
                })
            }, 0.3)
        } catch (error) {
            callback(error)
        }
    }

    // Método para generar un ID aleatorio
    __generateId__() {
        return Math.floor(Math.random() * 1000000000000000000).toString(36)
    }

    // Método para insertar un documento en la colección
    insert(document, callback) {
        asyncDelay(() => {
            const documentCopy = this.__clone__(document) // Realiza una copia profunda del documento

            documentCopy.id = this.__generateId__() // Genera un ID y asigna al documento copiado

            this.__documents__.push(documentCopy) // Agrega el documento copiado al array de documentos

            callback(null)
        }, 0.3)
    }

    // Método para encontrar el índice de un documento por su ID
    __findIndexById__(id, callback) {
        try {
            validateText(id, `${this.__clazz__.name} id`)

            asyncDelay(() => {
                const index = this.__documents__.findIndex(document => document.id === id) // Encuentra el índice del documento por su ID

                callback(null, index)
            }, 0.4)

        } catch (error) {
            callback(error)
        }
    }

    // Método para encontrar un documento por su ID
    findById(id, callback) {
        try {
            validateText(id, `${this.__clazz__.name} id`)

            asyncDelay(() => {
                const document = this.__documents__.find(document => document.id === id) // Encuentra el documento por su ID

                if (!document) {
                    callback(null, null) // El primer null se refiere al primer parámetro del callback y significa que no hay un error (la búsqueda del documento fue exitosa). El segundo null se refiere al segundo parámetro del callback y significa que el documento no fue encontrado.

                    return
                }

                callback(null, this.__clone__(document)) // La operación de búsqueda fue exitosa y posteriormente se crea una copia profunda del documento.
            }, 0.6)
        } catch (error) {
            callback(error)
        }
    }

    // Método para actualizar un documento en la colección
    update(document, callback) {
        try {
            // Verifica si el documento es una instancia de la clase adecuada
            if (!(document instanceof this.__clazz__)) throw new TypeError(`document is not a ${this.__clazz__.name}`)

            asyncDelay(() => {
                this.__findIndexById__(document.id, (error, index) => { // Encuentra el índice del documento por su ID
                    if (error) {
                        callback(error)

                        return
                    }

                    if (index < 0) { // Si el documento no se encuentra, llama al callback con un error
                        callback(new Error(`${this.__clazz__.name} not found`))

                        return
                    }

                    this.__documents__[index] = this.__clone__(document) // Reemplaza el documento en el array de documentos con una copia profunda

                    callback(null) // Llama al callback indicando una actualización exitosa.
                })
            }, 0.5)
        } catch (error) {
            callback(error)
        }
    }
}

// Clase que extiende de la clase Collection
class Users extends Collection {
    constructor() { // Constructor de la clase Users
        super(User, []) // Llama al constructor de la clase base (Collection) con la clase User y un array vacío (los dos argumentos de Collection: la clase (User en este caso) y un array que representa la colección de documentos "constructor(clazz, documents)")
    }

    // Método para buscar un usuario por su email
    findByEmail(email, callback) {
        try {
            validateText(email, "email")

            asyncDelay(() => {
                const user = this.__documents__.find(document => document.email === email) // Busca un usuario por su email en la colección

                if (!user) {
                    callback(null, null)

                    return
                }

                callback(null, this.__clone__(user)) // Realiza una copia profunda del usuario y llama al callback
            }, 0.7)
        } catch (error) {
            callback(error)
        }
    }

    getAll(callback) {
        asyncDelay(() => {
            callback(null, this.__documents__.map(this.__clone__.bind(this)))
        }, 0.8)
    }
}

// Clase que extiende de la clase Collection
class Posts extends Collection {
    constructor() {
        super(Post, [])
    }

    getAll(callback) {
        asyncDelay(() => {
            callback(null, this.__documents__.map(this.__clone__.bind(this))) // Utiliza el método map para realizar una copia profunda de cada post en la colección. El uso de bind(this) aquí es una forma de garantizar que la función __clone__ se ejecute con el contexto correcto, manteniendo la referencia a la instancia de la clase Posts.
        }, 0.8)
    }
}

class CreditCards extends Collection {
    constructor() {
        super(CreditCard, [])
    }
}