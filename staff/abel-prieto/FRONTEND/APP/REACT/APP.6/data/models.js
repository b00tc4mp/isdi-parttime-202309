class User {
    constructor(id, name, email, password) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
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

class Collection {
    constructor(userId, name, email, password, postId, author, image, text, likes) {
        this.userId = userId
        this.name = name
        this.email = email
        this.password = password
        this.postId = postId
        this.author = author
        this.image = image
        this.text = text
        this.likes = likes
    }

    clone(user, post) {
        if (user) {
            if (!(user instanceof User)) throw new TypeError('User is not a user')

            return new User(user.id, user.name, user.email, user.password)
        }

        if (post) {
            if (!(post instanceof Post)) throw new TypeError('post is not a Post')

            return new Post(post.id, post.author, post.image, post.text, post.likes.map(email => email))
        }
    }

    create(user, post) {
        if (user) {
            const user = new User(generateId(), this.name, this.email, this.password)

            db.users.push(user)
        }

        if (post) {
            const newPost = new Post(generateId(), this.userId, this.image, this.text, [])

            db.posts.push(newPost)
        }
    }

    findById(userId, postId) { 
        if (userId) {
            validateText(userId, 'user id')

            const user = db.users.find(user => userId === this.userId)
        
            if (user) {
                return cloneUser(user)
            }
        
            return null
        }

        if (postId) {
            validateText(postId, 'post id')

            const post = db.posts.find(post => postId === this.postId)
        
            if (post) {
                return clonePost(post)
            }
        
            return null
        }
    }

    findIndexById(userId, postId) {
        if (userId) {
            validateText(userId, 'user id')
    
            const index = db.users.findIndex((user) => userId === this.userId)
           
            return index
        }

        if (postId) {
            validateText(postId, 'post id')

            const index = db.posts.findIndex(post => postId === this.postId)
        
            return index
        }
    }

    update(user, post) {
        if (user) {
            if (!(user instanceof User)) throw new TypeError('User is not a user')

            const index = findIndexById(user.id)
        
            db.users[index] = cloneUser(user)
        }

        if (post) {
            if (!(post instanceof Post)) throw new TypeError('post is not a Post')

            const index = findIndexById(post.id)
        
            db.posts[index] = clonePost(post)
        }
    }
}

class UserCollection extends Collection {
    findUserByEmail (email) {
        validateText(email, 'email')

        const user = db.users.find((user) => this.email === email)
   
        return user
    }
}

class PostCollection extends Collection {
    getPost() {
        return db.posts.map(clonePost)
    }
}