
function existUser(emailValue) {
  return users.some((user) => user.email === emailValue)
}

function checkValidEmail(email) {
  return email === ''
}

function checkPassword(userPassword, password) {
  return userPassword === password
}

function userFound(email, password) {

  if (checkValidEmail(email)) throw new Error('All fields are required.')
   
  if (!existUser(email)) throw new Error('Wrong credentials.')

  var user = searchUser(email, password)
  return user
}

function registerUser(name, email, password) {
  var user = { name, email, password }

  if (checkValidEmail(email))
    throw new Error('All fields are required.')

  if (existUser(email))
    throw new Error('The email is already in use.')

  addUserToDatabase(user)
}