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

var posts = [
    {
        author: 'peter@pan.com',
        image: 'https://www.semana.com/resizer/U2dYNVlzGiHK5T-EV_jhACYU-Ow=/1920x1080/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JO53UT7DKVGVBNXQ5F37YJJZ3A.jpg',
        text: 'my granpa!',
    },
    {
        author: 'wendy@darling.com',
        image: 'https://i.etsystatic.com/27087751/r/il/45a140/3041590242/il_fullxfull.3041590242_o4qq.jpg',
        text: 'my sweety!',
    },
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
