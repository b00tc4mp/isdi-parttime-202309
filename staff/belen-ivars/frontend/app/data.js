var users = [
    {
        name: 'Ana',
        email: 'ana@gmail.com',
        password: '123123'
    },
    {
        name: 'Belén',
        email: 'belen@gmail.com',
        password: '123123'
    }
]

// CR UD - CreactiónRecuperaciónUpdatingDelete

function createUser(name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}

function findUserByEmail(email) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email)
            return user
    }

return null
}

function updateUsers(email) {

    
}