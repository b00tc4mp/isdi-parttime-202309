// business (logic)

function registerUser (name, email, password) {
    validatetext(name, 'name')
    validatetext(email, 'email')
    validatetext(password, 'password')


    var user = findUserByEmail(email)

    if (user) 
        throw new Error('user already exits')

    createUser(name, email, password)

}

function authenticateUser(email, password) {
    validatetext(email, 'email')
    validatetext(password, 'password')

    var user = findUserByEmail (email)

    if (!user || user.password !== password)
        throw new Error('wrong credentials')
}

function retrieverUser(email) {
    validatetext(email, 'email')

    var user = findUserByEmail(email)

    if(!user)
        throw new Error('user not found')

    return user 

}