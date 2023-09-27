// REGISTER LOGIC

function registerUser(username, email, password) {
    var userExists = userExistByEmail(email)

    if (userExists) 
        return false
    

    createUser(username, email, password)

    return true
}


// LOGIN LOGIC

var foundUser = null

function userAlreadyCreatedByEmail(email) {
    for (i = 0; i < users.length && !foundUser; i++) {
        var user = users[i]

        if (user.email === email) 
            foundUser = user
        
    }
}