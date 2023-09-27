var users = [
    {name :"eneko", email: "correo@correo.com", password: "123"}
]

function registerUser(name, email, password) {
  var user = { name, email, password }
  Object.values(user).some((val) => val !== '' && users.push(user))
}