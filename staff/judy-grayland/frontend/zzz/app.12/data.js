var db = {}

db.users = [
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

db.posts = [
  {
    author: 'simone@biles.com',
    image:
      'https://phantom-elmundo.unidadeditorial.es/14e29406d919ab966f9145a3bf12e8f3/crop/0x258/3072x2306/resize/746/f/webp/assets/multimedia/imagenes/2023/08/28/16932101527358.jpg',
    text: 'I am back',
    likes: ['marge@simpson.com']
  },
  {
    author: 'marge@simpson',
    image:
      'https://i.pinimg.com/564x/13/63/37/13633734d116fe188af57fe9da7d095e.jpg',
    text: 'my sweety!',
    likes: ['simone@biles.com']
  },
  {
    author: 'simone@biles.com',
    image:
      'https://e3.365dm.com/23/08/1600x900/skynews-simone-biles-us-gymnastic_6265542.jpg',
    text: "I've done it again",
    likes: ['marge@simpson']
  },
]

function createUser(name, email, password) {
  var user = {}
  user.name = name
  user.email = email
  user.password = password

  db.users.push(user)
}

function findUserByEmail(email) {
  var user = db.users.find(function (user) {
    return user.email === email
  })

  if (user) {
    var userCopy = {}

    userCopy.name = user.name
    userCopy.email = user.email
    userCopy.password = user.password

    return userCopy
  }

  return null
}

function modifyUserEmail(email, newEmail) {
  var user = db.users.find(function (user) {
    return user.email === email
  })

  user.email = newEmail
}

function modifyUserPassword(email, newPassword) {
  var user = db.users.find(function (user) {
    return user.email === email
  })

  user.password = newPassword
}

function clonePost(post) {
  var postCopy = {}

  postCopy.author = post.author
  postCopy.image = post.image
  postCopy.text = post.text
  
  const likes = post.likes.map (email => email)

  postCopy.likes = likes

  return postCopy
}

function getPosts() {
  return db.posts.map(clonePost)
}

function createPost(email, image, text) {
  var post = {}

  post.author = email
  post.image = image
  post.text = text
  post.likes = []

  db.posts.push(post)
}

function findPostByIndex(index) {
  
  var post = db.posts[index]

  if(post)
    return clonePost(post)
  
  return null
}

function updatePost(index, post){
  db.posts[index] = clonePost(post)

}
