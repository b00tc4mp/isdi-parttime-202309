// DONE

class Collection {
    constructor (clazz, Collection) {
        this.clazz= clazz
        this.Collection = Collection
    }

    clone (document) {
        var copy = new this.clazz

        for (var key in document) {
            var value = document[key]

            if (value instanceof Array)
                copy[key] = [...value]
            else if (value instanceof Object)
                copy[key] = {...value}
            else 
                copy[key] = document[key]
            
        }

        return copy
    }

    insert (document) {
        const documentCopy = this.clone (document)

        documentCopy.id = generateId ()

        this.Collection.push (documentCopy)
    }

    findById (id) {
        validateText (id, `${this.clazz.name}`)
    }
}

// TEST

var users = new Collection (user, db.users)

var user = new User (null, 'Ada Love', 'ada@love.com',123123123)
users.create(user)

var posts = new Collection (Post, db.posts)

var post = new Post (null, user.Collection[users.Collection.length -1].id, 'http://image.com', 'Hola mundo', [])
posts.create(post)