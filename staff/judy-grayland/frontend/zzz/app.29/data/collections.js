class Collection {
    constructor(clazz, documents) {
        this.clazz = clazz,
        this.documents = documents
    }

    // CLONE DOC
    clone(document) { 
        var copy = new this.clazz
        
        for(var key in document) {
            var value = document[key]

            if(value instanceof Array)
                copy[key] = [...value]
            else if (value instanceof Date)
                copy[key] = new Date(document[key])
            else if (value instanceof Object)
                copy[key] = [...value]
            else    
                copy[key] = document[key]
        }

        return copy
    }

    // DELETE DOC BY ID
    deleteById(id) {
        validateText(`${this.clazz.name} id`)

        const index = this.findIndexById(id)

        if(index < 0) {
            throw new Error(`${this.clazz.name} not found`)
        }
    
        this.documents.splice(index, 1)
    }

    // GENERATE RANDOM & UNIQUE ID
    generateId() {
        return Math.floor(Math.random() * 1000000000000000000).toString(36)
    }

    // CREATE DOC
    insert(document) {
        const documentCopy = this.clone(document)

        documentCopy.id = this.generateId()

        this.documents.push(documentCopy)
    }

    // FIND DOC ID BY INDEX
    findIndexById(id) {
        validateText(id, `${this.clazz.name} id`)

        return this.documents.findIndex(document => document.id === id)
    }

    // FIND DOC BY ID
    findById(id) {
        validateText(id, `${this.clazz.name} id`)

        const document = this.documents.find(document => document.id === id)

        if(!document)
            return null

        return this.clone(document)
    }

    // UPDATE DOC
    update(document) {
        if(!(document instanceof this.clazz)) {
            throw new TypeError(`document is not a ${this.clazz.name}`)
        }

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

        return this.documents.find(document => document.email === email) || null
    }
}

class Posts extends Collection {
    constructor() {
        super(Post, [])
    }

    // GET ALL POSTS
    getAll() {
        return this.documents.map(this.clone.bind(this)) // you need to bind it because that second this refers back to Collection 
    }
}

class CreditCards extends Collection {
    constructor() {
        super(CreditCard, [])
    }

}

/*
 NOTES
 db.users and db.posts are now documents (formerly known as collections)
 user and post are now document

 */
