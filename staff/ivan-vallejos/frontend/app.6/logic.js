function registerUser(name, email, password){
    validateText(name, 'name')
    validateText(email,'email')
    validateText(password,'password')

    var user = findUserByEmail(email)

    if (user)
        throw new Error('USer already exists')

    createUser(name, email, password)
}

function authenticateUSer (email, password) {
    validateText(email,'email')
    validateText(password,'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
        throw new Error('Wrong credentials')
}

function retrieveUser (email) {
    validateText(email,'email')

    var user = findUserByEmail

    if (!user)
        throw new Error ('User not Found')

    return user
}

function changeUserEmail(email, newEmail, newEmailConfirm,password) {
    validateText(email,'email')
    validateText(newEmail,'newEmail')
    validateText(newEmailConfirm,'newEmailConfirm')
    validateText(password,'password')

    var user = findUserByEmail(email)   

    if (!user || user.password !== password)
        throw new Error ('Wrong credentials')

    if((newEmail !== newEmailConfirm)) 
        throw new Error ('new email and its confirmation do not match')

        user.email = newEmail
}

function changeUserPassword (email,newPassword, newPasswordConfirm, password) {
    validateText(email, 'email')
    validateText(newPassword, 'newPassword')
    validateText(newPasswordConfirm, 'newPasswordConfirm')
    validateText(password, 'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
        throw new Error('Wrong credentials')

    if(newPassword !== newPasswordConfirm)
        throw new Error('New password and its confirmation do not match')

        user.password = newPassword
}