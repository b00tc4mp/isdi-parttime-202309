// COLLECTION

class Collection {    
    constructor(clazz, collection) {
        this.clazz = clazz
        this.documents = collection
    }

    // CLONE DOCUMENT
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

    // GENERATE RANDOM & UNIQUE ID
    generateId() {
        return Math.floor(Math.random() * 1000000000000000000).toString(36)
    }

    // CREATE DOCUMENT
    insert(document) {
        const documentCopy = this.clone(document)

        documentCopy.id = this.generateId()

        this.documents.push(documentCopy)
    }

    //FIND DOCUMENT BY INDEX
    findIndexById(id) {
        validateText(id, `${this.clazz.name} id`)

        return this.documents.findIndex(document => document.id === id)
    }

    //FIND DOCUMENT BY ID
    findById(id) {
        validateText(id, `${this.clazz.name} id`)

        const document = this.documents.find(document => document.id === id)

        if (!document) return null

        return this.clone(document)
    }


    // UPDATE DOC.
    update(document) {
        if (!(document instanceof this.clazz)) throw new TypeError(`document is not a ${this.clazz.name}`)

        const index = this.findIndexById(document.id)

        if (index < 0)
            throw new Error(`${this.clazz.name} not found`)

        this.documents[index] = this.clone(document)
    }
}

class Users extends Collection {
    constructor() {
        super(User, [])
    }

    // FIND BY EMAIL
    findByEmail(email) {
        validateText(email, `${this.clazz.name} email`)

        const user = this.documents.find(document => document.email === email)

        if (!user) return null

        return this.clone(user)
    }
}

class Posts extends Collection {
    constructor() {
        super(Post, [])
    }

    // GET
    getAll() {
        return this.documents.map(this.clone.bind(this))
    }
}

class CreditCards extends Collection {
    constructor() {
        super(CreditCard, [])
    }
}

// - - INFO - - 

// Queremos crear una clase Collection para traernos todos los manejadores de datos a una misma clase y poder así pasar dichos "métodos" en un todo.

// Estructuramos la clase Collection y en su contructor, le pasamos como argumentos:

// - Una clase (this.clazz), diferente de "class" (palabra reservada), en la que collection pueda saber/diferenciar si es User o Post
// - La propia collection para determinar el this de la clase