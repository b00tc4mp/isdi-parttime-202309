function registerUser (name, email, password) {
    var userExist = userExistByEmail(email)

    if (userExist)
    return false

    return true
}

