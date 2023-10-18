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
        name: 'av',
        email: 'av',
        password: 'av',
    }
]

var post = [
    {
        author: 'peter@pan.com',
        image: 'https://imgs.search.brave.com/vmcxcLdL_6y64v7elABO3LfipjFU6MJf115y3jTxR04/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16SXdNelV5/WVRVdE1qUTNNeTAw/TkRjM0xXSXlaalF0/T0dVek5ESm1OVEZs/TldVeFhrRXlYa0Zx/Y0dkZVFYVnlNakEw/TURRME1qY0AuanBn',
        text: 'my granpa!',
    },
    {
        author: 'wendy@darling.com',
        image: 'https://imgs.search.brave.com/o0n0Kr21IgcR-oygUdDBoUV4sYM5SzIAqPW61gJHR7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQxL2E0/LzNmLzQxYTQzZmRh/ZWYwNjI4OWI4NWVh/MzA4Zjk1ZTBlNDZj/LmpwZw',
        text: 'my sweety!',
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
