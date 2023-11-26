function registerUser(name, email, password){
    if (!name.trim().length) throw new Error ('Name is Empty')
    if (!email.trim().length) throw new Error ('Email is Empty')
    if (!password.trim().length) throw new Error ('Password is Empty')

    var user = findUserByEmail(email)

    if (user)
        throw new Error('USer already exists')

    createUser(name, email, password)
}

function authenticateUSer (email, password) {
    if (!email.trim().length) throw new Error ('Email is empty')
    if (!password.trim().length) throw new Error ('Password is Empty')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
        throw new Error('Wrong credentials')
}

function retrieveUser (email) {
    if (!email.trim().length) throw new Error ('Email is empty')

    var user = findUserByEmail

    if (!user)
        throw new Error ('User not Found')

    return user
}