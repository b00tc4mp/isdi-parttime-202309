
function existUser(emailValue) {
  return users.some((user) => user.email === emailValue)
}

function checkValidEmail(email) {
  return email === ''
}

function checkPassword(userPassword, password) {
  return userPassword === password
}
