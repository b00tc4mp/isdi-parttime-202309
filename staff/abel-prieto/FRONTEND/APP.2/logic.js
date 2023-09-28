function registerUser(name, email, password) {
    var user = findUserByEmail(email)

    if (user)
        return false

    createUser(name, email, password)

    return true
}

function authenticateUser(email, password) {
    var user = findUserByEmail(email)

    if (!user || user.password !== password)
        return false

    return true
}

function retrieveUser(email) {
    var user = findUserByEmail(email)

    return user
}