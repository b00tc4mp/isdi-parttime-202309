function registerUser(name, email, password) {
  var user = { name, email, password }
  Object.values(user).some((val) => val !== '' && users.push(user))
}

function existUser(emailValue) {
  return users.some((user) => user.email === emailValue)
}

function checkValidEmail(email) {
  return email === ''
}

function userFound(email, password) {
  var user = users.find(
    (user) => user.email === email && user.password === password
  )
  return user
}
