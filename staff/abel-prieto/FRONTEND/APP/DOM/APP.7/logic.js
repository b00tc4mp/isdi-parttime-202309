// REGISTER LOGIC

function registerUser(name, email, password) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')

    var user = findUserByEmail(email)

    if (user)
        throw new Error('user already exists')

    createUser(name, email, password)
}

function authenticateUser(email, password) {
    validateText(email, 'email')
    validateText(password, 'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
        throw new Error('wrong credentials')
}

// LOGIN LOGIC

function retrieveUser(email) {
    validateText(email, 'email')

    var user = findUserByEmail(email)

    if (!user)
        throw new Error('user not found')

    return user
}

// FUNCION COMPROBAR NEW EMAIL

function changeUserEmail(email, newEmail, confirmNewEmail, password) {
    validateText(email, 'email')
    validateText(newEmail, 'new email')
    validateText(confirmNewEmail, 'new email confirm')
    validateText(password, 'new email')

    var user = findUserByEmail(email)

    if (!user || user.password !== password) {
        throw new Error('wrong credentials')
    }
    if (newEmail !== confirmNewEmail) {
        throw new Error('New email and your confirm doesnt match each other')
    }

    // user.email = newEmail

    modifyUserEmail(email, newEmail)
}

// FUNCIÓN COMPROBAR NEW PASSWORD

function changeUserPassword(email, password, newPassword, againNewPassword) {
    validateText(email, 'email')
    validateText(password, 'password')
    validateText(newPassword, 'new password')
    validateText(againNewPassword, 'the repeat password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password) {
        throw new Error('wrong credentials')
    }
    if (newPassword !== againNewPassword) {
        throw new Error('New pass and his confirmation are not correct. Try again') 
    }

    // user.password = newPassword

    modifyUserPassword(email, newPassword)
}

function retrievePosts() {
    return getPosts()
}

function publishPost(email, image, text) {
    validateText(email, 'email')
    validateText(image, 'image')
    validateText(text, 'text')

    createPost(email, image, text)
}