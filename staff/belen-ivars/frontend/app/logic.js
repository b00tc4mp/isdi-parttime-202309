function registerUser(name, email, password) {
    validateText(name, 'Name')
    validateText(email, 'Email')
    validateText(password, 'Password')
    
    var user = findUserByEmail(email)

    if (user)
        throw new Error('User already exists')

    createUser(name, email, password)
}

function authenticateUser(email, password) {
    validateText(email, 'Email')
    validateText(password, 'Password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
       throw new Error('Wrong credentials')
}

function retrieveUser(email) {
    validateText(email, 'Email')

    var user = findUserByEmail(email)

    if (!user)
    throw new Error('User not found')

    return user
}

