var users = [];

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

function findUserByEmail(email) {
    var foundEmail = users.find(user => user.email === email);
    return foundEmail !== undefined ? foundEmail : null;
}

// Utilizo un operador ternario para cambiar el undefined por null porque no es lo mismo decirle que el email que estoy 
// buscando no existe, que decirle que aún no está definido o inicializado.