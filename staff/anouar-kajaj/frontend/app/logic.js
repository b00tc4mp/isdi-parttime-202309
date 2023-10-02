function registerUser(name, email, password) {
    if (!name.trim().length) {
        throw new Error('Name is empty')
    }
    if (!email.trim().length) {
        throw new Error('Email is empty')
    }
    if (!password.trim().length) {
        throw new Error('Password is empty')
    }

    var user = findUserByEmail(email)

    if (user) {
        throw new Error('User already exists')
    }

    createUser(name, email, password)
}

function authenticateUser(email, password) {
    if (!email.trim().length) {
        throw new Error('Email is empty')
    }
    if (!password.trim().length) {
        throw new Error('Password is empty')
    }

    var user = findUserByEmail(email) 
    
    if (!user || user.password !== password) {
        throw new Error('Wrong credentials')
    }
}

function retrieveUser(email) {

    if (!email.trim().length) {
        throw new Error('Email is empty')
    }

    var user = findUserByEmail(email)

    if(!user) {
        throw new Error('user not found')
    }

    return user
}