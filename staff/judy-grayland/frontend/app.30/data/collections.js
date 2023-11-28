class Collection {
    constructor(clazz, documents) {
        this.__clazz__ = clazz,
        this.__documents__ = documents
    }

    // CLONE DOC
    __clone__(document) { 
        var copy = new this.__clazz__
        
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
        validateText(`${this.__clazz__.name} id`)

        const index = this.findIndexById(id)

        if(index < 0) {
            throw new Error(`${this.__clazz__.name} not found`)
        }
    
        this.__documents__.splice(index, 1)
    }

    // GENERATE RANDOM & UNIQUE ID
    __generateId__() {
        return Math.floor(Math.random() * 1000000000000000000).toString(36)
    }

    // CREATE DOC
    insert(document) {
        const documentCopy = this.clone(document)

        documentCopy.id = this.generateId()

        this.__documents__.push(documentCopy)
    }

    // FIND DOC ID BY INDEX
    __findIndexById__(id, callback) {
        asyncDelay(() => {
            validateText(id, `${this.__clazz__.name} id`)

            const index = this.__documents__.findIndex(document => document.id === id)

            callback(index)
        }, 0.4)
    }

    // FIND DOC BY ID
    findById(id, callback) {
        asyncDelay(() => {
            validateText(id, `${this.__clazz__.name} id`)

            const document = this.__documents__.find(document => document.id === id)

            if(!document){
                callback(null)

                return
            }
            
            callback(this.clone(document))
        }, 0.6)
    }

    // UPDATE DOC
    update(document, callback) {
        asyncDelay(() => {
            if(!(document instanceof this.__clazz__)) {
                throw new TypeError(`document is not a ${this.__clazz__.name}`)
            }

            this.__findIndexById__(document.id, index => {
                if (index < 0) 
                    throw new Error(`${this.__clazz__.name} not found`)

                this.__documents__[index] = this.clone(document)

                callback()
            })
        }, 0.5)
    }  
}

class Users extends Collection {
    constructor() {
        super(User, [])
    }

    // FIND BY EMAIL
    findByEmail(email, callback) {
        asyncDelay(() => {
            validateText(email, `${this.__clazz__.name} email`)
            
            const user = this.__documents__.find(document => document.email === email) 

            if(!user) {
                callback(null)

                return
            }

            callback(this.__clone__(user))
        }, 0.7)
    }   
}

class Posts extends Collection {
    constructor() {
        super(Post, [])
    }

    // GET ALL POSTS
    getAll(callback) {
        asyncDelay(() => {
            callback(this.__documents__.map(this.clone.bind(this)))
            // you need to bind it because that second this refers back to Collection }))
        }, 0.8)
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
