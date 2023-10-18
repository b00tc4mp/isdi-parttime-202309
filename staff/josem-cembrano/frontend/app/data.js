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
        name: 'qwe',
        email: 'qwe@qwe.com',
        password: 'qwe'
    },
    {
        name: 'Chema',
        email: 'chemaisdi@gmail.com',
        password: '123123123'
    },
    {

        name: 'Rocio',
        email: 'rocio@gmail.com',
        password: '123123123'
    },

]

var post = [
    {
        author: 'chemaisdi@gmail.com',
        image: 'https://mir-s3-cdn-cf.behance.net/projects/404/c9f192101704379.Y3JvcCwyMDgwLDE2MjYsMCw0ODM.png',
        text: 'dont touch me'
    },
    {
        author: 'rocio@gmail.com',
        image: 'https://www.peacefuldumpling.com/wp-content/uploads/2017/04/5_Pre_Workout_Breakfasts_That_Will_Give_You_Energy_and-_Improve_Your_Performance-Cashew_Yogurt_Parfait-e1492605524788.jpg',
        text: 'fitness breakfast'
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
