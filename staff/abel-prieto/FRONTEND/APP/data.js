// REGISTER DATA

var users = [
    {
        username: 'Wendy Darling',
        email: 'wendy@darling.com',
        password: '123123123'
    },
    {
        username: 'Peter Pan',
        email: 'peter@pan.com',
        password: '123123123'
    }
]

 
function userExistByEmail(email) {
    for (i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) 
            return true
    }

    return false
}

function createUser(username, email, password) {
    var user = {}
    
    user.username = username
    user.email = email
    user.password = password

    users.push(user)
}


// LOGIN DATA

function showMessage() {
    var homeTittle = homeView.querySelector('h1')
    
    homeTittle.innerText = 'Hello ' + foundUser.username + '!'
}