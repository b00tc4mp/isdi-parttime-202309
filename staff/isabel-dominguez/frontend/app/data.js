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
    }
]

function clearFormFields(form) {
    var inputs = form.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.value = '';
    });
}

function createUser(name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}

function findUserByEmail(email, newEmail) {
    var foundEmail = users.find(user => user.email === email);
    return foundEmail !== undefined ? foundEmail : null;
}

