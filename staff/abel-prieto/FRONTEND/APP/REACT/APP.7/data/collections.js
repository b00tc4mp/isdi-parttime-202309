// COLLECTION

class Collection {
    constructor(clazz, collection) {
        this.clazz = clazz
        this.collection = collection
    }

    // CLONE DOC.
    clone(document) {
        var copy = new this.clazz

        for (var key in document) {
            var value = document[key] 

            if (value instanceof Array) 
                copy[key] = [...value]

            else if (value instanceof Date)
                copy[key] = new Date(document[key]) 

            else if (value instanceof Object)
                copy[key] = {...value}

            else
                copy[key] = document[key]

        }

        return copy
    }

    // DELETE DOC. BY ID
    deleteById(id) {
        validateText(`${this.clazz.name} id`) 

        const index = this.findIndexById(id)

        if (index < 0) {
            throw new Error(`${this.clazz.name} not found`)
        }

        this.collection.splice(index, 1)
    }
    
    // GENERATE RANDOM & UNIQUE ID
    generateId() {
        return Math.floor(Math.random() * 1000000000000000000).toString(36)
    }

    // CREATE DOC.
    insert(document) {
        const documentCopy = this.clone(document)

        documentCopy.id = this.generateId()

        this.collection.push(documentCopy)
    }

    // FIND DOC. BY ID
    findById(id) { 
       validateText(id, `${this.clazz.name} id`)

       return this.collection.find(document => document.id === id) || null
    }

    // FIND DOC. ID BY INDEX
    findIndexById(id) {
        validateText(id, `${this.clazz.name} id`)

        return this.collection.findIndex(document => document.id === id) || null
    }

    // UPDATE DOC.
    update(document) {
        if(!(document instanceof this.clazz)) {
            throw new Error(`document is not a ${this.clazz.name}`)
        }

        const index = this.findIndexById(document.id)

        if (index < 0) {
            throw new Error(`${this.clazz.name} not found`)
        }

        this.collection[index] = this.clone(document)
    }
}

class Users extends Collection {
    constructor() {
        super(User, [])
    }

    // FIND BY EMAIL
    findByEmail(email) {
       validateText(`email, ${this.clazz.name} email`)

       return this.collection.find(document => document.email === email) || null
    }
}

class Posts extends Collection {
    constructor() {
        super(Post, [])
    }

    // GET 
    getAll() {
        return this.collection.map(this.clone.bind(this))
        // Preguntar a MANU (?)
    }
}

class CreditCards extends Collection {
    constructor() {
        super(CreditCard, [])
    }
} 

// var users = new Collection(User, db.users)

// var user = new User(null, 'Ada Love', 'ada@love.com', '123123123')
// users.create(user)

// - - INFO - - 

// Queremos crear una clase Collection para traernos todos los manejadores de datos a una misma clase y poder así pasar dichos "métodos" en un todo.

// Estructuramos la clase Collection y en su contructor, le pasamos como argumentos:

// - Una clase (this.clazz), diferente de "class" (palabra reservada), en la que collection pueda saber/diferenciar si es User o Post
// - La propia collection para determinar el this de la clase


     