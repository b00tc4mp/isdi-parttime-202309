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

function changeUserEmail(email, newEmail, newEmailConfirm, password) {
    validateText(email, 'email')
    validateText(newEmail, 'new email')
    validateText(newEmailConfirm, 'new email confirm')
    validateText(password, 'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
        throw new Error('Wrong credentials')

    if (newEmail !== newEmailConfirm)
        throw new Error('new email and its confirmation do not match')

    modifyUserEmail(email, newEmail)
}

function changeUserPassword(email, newPassword, newPasswordConfirm, password) {
    validateText(email, 'email')
    validateText(newPassword, 'new password')
    validateText(newPasswordConfirm, 'new password confirm')
    validateText(password, 'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
        throw new Error('Wrong credentials')

    if (newPassword !== newPasswordConfirm)
        throw new Error('new password and its confirmation do not match')

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