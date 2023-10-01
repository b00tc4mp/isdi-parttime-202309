var existingUsers = [
  {
    name: 'Maggie Smith',
    email: 'maggie@smith.com',
    password: 'aaa'
  },
  {
    name: 'Marge Simpson',
    email: 'marge@simpson.com',
    password: 'bbb'
  },
  {
    name: 'Jamie-Lee Curtis',
    email: 'jamielee@curtis.com',
    password: 'ccc'
  }
]

function createUser(name, email, password) {
  var newUser = {}
  newUser.name = name
  newUser.email = email
  newUser.password = password
  
  existingUsers.push(newUser)
}


function findUserByEmail(email) {

  for(var i=0; i<existingUsers.length; i++) {
    var existingUser = existingUsers[i]

    if(existingUser.email === email)
      return existingUser
  }
  
  return null
  
}