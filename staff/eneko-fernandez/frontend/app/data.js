var users = [
    {name :"eneko", email: "correo@correo.com", password: "123"}
]
var userSession = {}

function searchUser(email, password) {
  var user = users.find(
    (user) => user.email === email && user.password === password
  )
  if(!user) {
    throw new Error('User not found')
  } else {
    return user
  } 
}

function findUserByEmail(email) {
   var user = users.find(
    (user) => user.email === email 
  )

  if(!user) throw new Error('User not found')
  return user
}

function updateUserEmail (user, email) {
  if(!email) throw new Error('New email is not valid.')
  user.email = email
}

function updatePassword (user, password, newPassword) {
  if(!checkPassword(user.password, password)) throw new Error('Error password.')
  if(!newPassword) throw new Error('New password is not valid.')
  user.password = newPassword
}

function addUserToDatabase (user) {
  users.push(user)
}