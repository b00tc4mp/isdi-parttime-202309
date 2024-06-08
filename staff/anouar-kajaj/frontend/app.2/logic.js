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

    validateText(email, 'email')

    var user = findUserByEmail(email)

    if(!user) {
        throw new Error('user not found')
    }

    return user
}

function changeUserEmail(email, newEmail, newEmailConfirm, password) {
    validateText(email, 'email')
    validateText(newEmail, 'newEmail')
    validateText(newEmailConfirm, 'new email confirm')
    validateText(password, 'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password) {
        throw new Error ('Wrong credentials')
    }

    if (newEmail !== newEmailConfirm) {
        throw new Error('new email and its confirmation do not match')
    }

    user.email = newEmail
}