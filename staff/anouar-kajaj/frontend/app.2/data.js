var users = [
    {
        name: "Manuel Barzi", 
        email: "manuelbarzi@gmail.com", 
        password: "123"
    },
    {
        name: "John Fitzgerald Kennedy",
        email: "johnfitzgeraldkennedy@gmail.com",
        password: "123"
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

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            return user
        }
    }

    return null
}