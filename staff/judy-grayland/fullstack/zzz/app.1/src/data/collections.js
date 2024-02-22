import { User, Post, CreditCard } from "./models"
import randomDelay from "../utils/randomDelay"
import { validateText } from "../utils/validators"

class Collection {
    constructor(clazz, documents) {
        this.__clazz__ = clazz,
        this.__documents__ = documents
    }

    // the Collection has two private properties which are clazz and documents.

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
    deleteById(id, callback) {
        try {   
            validateText(`${this.__clazz__.name} id`)
            
            randomDelay(() => {
                this.__findIndexById__(id, (error, index) => {  
                    if (error) {
                        callback(error)

                        return
                    }
                    if (index < 0) {
                        callback(new Error(`${this.__clazz__.name} not found`))

                        return
                    }
                    
                    callback(null, this.__documents__.splice(index, 1))
                })
            })
        } catch (error) {
            callback(error)
        }
    }

    // GENERATE RANDOM & UNIQUE ID
    __generateId__() {
        return Math.floor(Math.random() * 1000000000000000000).toString(36)
    }

    // CREATE DOC
    insert(document, callback) {
        randomDelay(() => {
            const documentCopy = this.__clone__(document)

            documentCopy.id = this.__generateId__()
    
            this.__documents__.push(documentCopy)

            callback(null)
        })
       
    }

    // FIND DOC ID BY INDEX
    __findIndexById__(id, callback) {
        try{
            validateText(id, `${this.__clazz__.name} id`)

            randomDelay(() => {
                const index = this.__documents__.findIndex(document => document.id === id)

                callback(null, index)
            })
        } catch (error) {
            callback(error)
        }
    }

    // FIND DOC BY ID
    findById(id, callback) {
        try{
            randomDelay(() => {
                validateText(id, `${this.__clazz__.name} id`)

                const document = this.__documents__.find(document => document.id === id)

                if(!document){
                    callback(null)

                    return
                }
                
                callback(null, this.__clone__(document))
            })
        } catch (error) {
            callback(error)
        }
    }

    // UPDATE DOC
    update(document, callback) {
        try{    
            if(!(document instanceof this.__clazz__)) {
                throw new TypeError(`document is not a ${this.__clazz__.name}`)
            }

            randomDelay(() => {
                this.__findIndexById__(document.id, (error,index) => {
                    if(error) {
                        callback (error)

                        return
                    }
                    if (index < 0) {
                        throw new Error(`${this.__clazz__.name} not found`)
                        
                        return
                    }

                    this.__documents__[index] = this.__clone__(document)

                    callback(null)
                })
            })
        }  catch (error) {
            callback (error)
        }
    }   
}

class Users extends Collection {
    constructor() {
        super(User, [])
    }

    // FIND BY EMAIL
    findByEmail(email, callback) {
        randomDelay(() => {
            validateText(email, `${this.__clazz__.name} email`)
            
            const user = this.__documents__.find(document => document.email === email) 

            if(!user) {
                callback(null, null)

                return
            }

            callback(null, this.__clone__(user))
        })
    }   

    getAll(callback) {
        randomDelay(() => {
            callback(null, this.__documents__.map(this.__clone__.bind(this)))
            // you need to bind it because that second this refers back to Collection }))
        })
    }
}

class Posts extends Collection {
    constructor() {
        super(Post, [])
    }

    // GET ALL POSTS
    getAll(callback) {
        randomDelay(() => {
            callback(null, this.__documents__.map(this.__clone__.bind(this)))
            // you need to bind it because that second this refers back to Collection }))
        })
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

 export {
    Users,
    Posts,
    CreditCards
 }