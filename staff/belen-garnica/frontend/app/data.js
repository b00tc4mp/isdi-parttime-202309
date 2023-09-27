// storage

var users = [
    {
        name: 'user.a',
        email: 'user.a@email.com',
        password: 'usera'
    },
    {
        name: 'user.b',
        email: 'user.b@email.com',
        password: 'userb'
    }
]

function userExistByEmail(email) {
    for (var i = 0; < users.length; i++) {
        var user = users[i]

        if (user.email === email)
            return true
    }

    return false
}

function createUser(name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}