//DATA LAYER
//Borrar para coger el input del user
var users = [
    {
        name: 'Edgar Moreno',
        email: 'edgar.moreno.req@gmail.com',
        password: '123'
    },

    {
        name: 'Dupin',
        email: 'abc@gmail.com',
        password: '123'
    }
];

//BUSCA EN LA BBDD UN USUARIO
function userExistsByEmail(email) {


    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.email === email)
            return true
    }

    return false;

}

function createUser(name, email, password) {
    var user = {};

    user.name = name;
    user.email = email;
    user.password = password;

    users.push(user);
}



