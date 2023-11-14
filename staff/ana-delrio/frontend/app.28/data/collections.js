class Collection {
    constructor(clazz, collection) {
        this.clazz = clazz
        this.collection = collection
    }

    clone(document) {
        var copy = new this.clazz

        for (var key in document) {
            var value = document[key]

            if (value instanceof Array)
                copy[key] = [...value]
            else if (value instanceof Date)
                copy[key] = new Date(document[key])
            else if (value instanceof Object)
                copy[key] = { ...value }
            else
                copy[key] = document[key]

        }

        return copy
    }

    generateId() {
        return Math.floor(Math.random() * 1000000000000000000).toString(36)
    }

    insert(document) {
        // primero lo clonamos, después lo guardamos
        const documentCopy = this.clone(document)

        documentCopy.id = this.generateId()

        this.collection.push(documentCopy)
    }


    findIndexById(id) {
        // es una forma de obtener el nombre de la clase actual y se utiliza para construir dinámicamente un mensaje que se pasa como argumento a otra función
        validateText(id, `${this.clazz.name} id`)

        return this.collection.findIndex(document => document.id === id)
    }

    findById(id) {
        validateText(id, `${this.clazz.name} id`)
        // la expresión completa se asegura de que la función findById devuelva el documento encontrado si existe, y si no, devuelve null
        return this.collection.find(document => document.id === id) || null
    }

    update(document) {
        // Primero validamos que sea instancia de la clase de la colección que sea
        // Ejemplo: si quiero chequear un post en la colleción de user, ERROR
        if (!(document instanceof this.clazz)) throw new TypeError(`document is not a ${this.clazz.name}`)

        // Buscamos el docu en bd, usando el id
        const index = this.findIndexById(document.id)

        if (index < 0)
            throw new Error(`${this.clazz.name} not found`)

        // en mi colección, reemplazamos, clonándolo
        this.collection[index] = this.clone(document)
    }
}


// de aquí para abajo son los métodos específicos

class Users extends Collection {
    constructor() {
        // llamamos al constructor padre y le pasamos de arriba
        // this.clazz = clazz
        // this.collection = collection
        super(User, [])
    }

    findByEmail(email) {
        validateText(email, `${this.clazz.name} email`)

        return this.collection.find(document => document.email === email) || null
    }
}

class Posts extends Collection {
    constructor() {
        super(Post, [])
    }
    // El método getAll devuelve una copia de todos los elementos en la colección
    getAll() {
        // bind pars asegurarnos de que la función clone se ejectue en el contexto de la función map, dentro de la clase post
        return this.collection.map(this.clone.bind(this))
    }
}

class CreditCards extends Collection {
    constructor() {
        // arry vacío, al ppo no hay tarjeta de crédito
        super(CreditCard, [])
    }
}