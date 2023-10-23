var users = [
    {
        name: 'Delicada Gandia',
        email: 'delicada@gandia.com',
        password: '123123'
    },
    {
        name: 'Tio Sangonera',
        email: 'tio@sangonera.com',
        password: '123123'
    }
]

var posts = [
    {
        author: 'delicada@gandia.com',
        image: 'https://www.miravalencia.com/wp-content/uploads/2017/01/delicagandia.jpg',
        text: 'In my honor!'
    },
    {
        author: 'tio@sangonera.com',
        image: 'https://i.pinimg.com/564x/92/05/d1/9205d173c55d72edebb34d91e9a1be55.jpg',
        text: 'Nice day'
    },
    {
        author: 'delicada@gandia.com',
        image: 'https://ladelicadegandia.monduv.com/wp-content/uploads/2023/01/Ladelica-01-979x1024.jpg',
        text: 'Not bad'
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

        if (user.email === email)
            return user
    }

    return null
}