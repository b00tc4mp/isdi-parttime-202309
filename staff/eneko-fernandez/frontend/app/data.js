var users = [
    {name :"eneko", email: "correo@correo.com", password: "123"}
]
var userSession = {}

function userFound(email, password) {
  var user = users.find(
    (user) => user.email === email && user.password === password
  )
  return user
}

function findUserByEmail(email) {
   var user = users.find(
    (user) => user.email === email 
  )
  return user
}

function updateUserEmail (user, email) {
  user.email = email
}

function updatePassword (user, newPassword) {
  user.password = newPassword
}

function registerUser(name, email, password) {
  var user = { name, email, password }
  Object.values(user).some((val) => val !== '' && users.push(user))
}