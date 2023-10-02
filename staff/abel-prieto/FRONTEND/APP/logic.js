// REGISTER LOGIC

function registerUser(name, email, password) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')

    // if (!name.trim().length) throw new Error('name is empty')
    // if (!email.trim().length) throw new Error('email is empty')
    // if (!password.trim().length) throw new Error('password is empty')

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

function checkNewEmail(newEmail) {
     validateText(newEmail, 'new email');

     for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === newEmail)
            throw new Error('This is your current email. Please, choose another one.')
    }

    return user.email
}

// FUNCIÓN COMPROBAR NEW PASSWORD

function checkNewPassword(currentPassword, newPassword, againNewPassword) {
    validateText(currentPassword, 'current password')
    validateText(newPassword, 'new password')
    validateText(againNewPassword, 'the repeat password')

    for (var i = 0; i < users.length; i++) {

        var user = users[i]

        if (user.password !== currentPassword) {
            throw new Error('Your password does not match your current one')
        }

        if (user.password === newPassword) {
            throw new Error('Thats the same password... Choose another one')
        }
    
        return user.password
    }
}