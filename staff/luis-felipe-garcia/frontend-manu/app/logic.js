function registerUser(name, email, password) {
    var userExists = checkAndGetUser(email)

    if (userExists)
        return false

    createUser(name, email, password)
    return true
}


/*function checkAndGetUser(email) {
    var userExists = userExistsByEmail(email)
    if (userExists) {
       // userExists = user
        return userExists
    }
}
/*
function checkAndGetUser(email) {
    var userToCheck = null
    for (var i = 0; i < users.length && !userToCheck; i++) {
        var user = users[i]

        if (user.email === email) {
            userToCheck = user
            return userToCheck
        }

    }
}*/