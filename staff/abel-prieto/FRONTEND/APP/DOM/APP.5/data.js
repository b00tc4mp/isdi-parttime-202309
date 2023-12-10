var users = [
    {
        name: 'Wendy Darling',
        email: 'wendy@darling.com',
        password: '123123123'
    },
    {
        name: 'Peter Pan',
        email: 'peter@pan.com',
        password: '123123123'
    },
    {
        name: 'NanoPucela',
        email: 'av',
        password: 'av',
    }
]

function createUser(name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}

function findUserByEmail(email) {
    validateText(email, 'email')

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email)
            return user
    }

    return null
}

function findUserByPassword(password) {
    validateText(password, 'password')

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.password === password)
            return user
    }

    return null
}
