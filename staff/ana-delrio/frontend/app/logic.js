// business (logic)

function registerUser (name, email, password) {
    if (!name.trim().length) throw new Error('name is empty')
    if (!email.trim().length) throw new Error('email is empty')
    if (!password.trim().length) throw new Error('password is empty')


    var user = findUserByEmail(email)

    if (user) 
        throw new Error('user already exits')

    createUser(name, email, password)

}

function authenticateUser(email, password) {
    if (!email.trim().length) throw new Error('email is empty')
    if (!password.trim().length) throw new Error('password is empty')

    var user = findUserByEmail (email)

    if (!foundUser || user.password !== password)
        throw new Error('wrong credentials')
}

function retrieverUser(email) {
    if (!email.trim().length) throw new Error('email is empty')

    var user = findUserByEmail(email)

    if(!user)
        throw new Error('user not found')

    return user 

}