var existingUsers = [
  {
    name: 'Simone Biles',
    email: 'simone@biles.com',
    password: 'aaa',
  },
  {
    name: 'Marge Simpson',
    email: 'marge@simpson.com',
    password: 'bbb',
  },
  {
    name: 'Jamie-Lee Curtis',
    email: 'jamielee@curtis.com',
    password: 'ccc',
  },
]

var posts = [
  {
    author: 'simone@biles.com',
    image:
      'https://phantom-elmundo.unidadeditorial.es/14e29406d919ab966f9145a3bf12e8f3/crop/0x258/3072x2306/resize/746/f/webp/assets/multimedia/imagenes/2023/08/28/16932101527358.jpg',
    text: 'I am back',
  },
  {
    author: 'marge@simpson',
    image:
      'https://i.pinimg.com/564x/13/63/37/13633734d116fe188af57fe9da7d095e.jpg',
    text: 'my sweety!',
  },
  {
    author: 'simone@biles.com',
    image:
      'https://e3.365dm.com/23/08/1600x900/skynews-simone-biles-us-gymnastic_6265542.jpg',
    text: 'I have done it again',
  },
]

function createUser(name, email, password) {
  var newUser = {}
  newUser.name = name
  newUser.email = email
  newUser.password = password

  existingUsers.push(newUser)
}

function findUserByEmail(email) {
  for (var i = 0; i < existingUsers.length; i++) {
    var existingUser = existingUsers[i]

    if (existingUser.email === email) return existingUser
  }

  return null
}
