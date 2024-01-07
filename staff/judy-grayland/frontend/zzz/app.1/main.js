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

var registerView = document.getElementById('register')
registerView.style.display = 'none'

var  registerLoginLink = registerView.querySelector('a')

registerLoginLink.onclick = function (event) {
  event.preventDefault()

  registerView.style.display = 'none'
  loginView.style.display = 'block'
}

var registerForm = registerView.querySelector('form')

registerForm.onsubmit = function (event) {
  event.preventDefault()
  
  var emailInput = registerForm.querySelector('#email')
  var email = emailInput.value
  
  var userFound = false

  for(let i=0; i<existingUsers.length && !userFound; i++){
    var existingUser = existingUsers[i]
    if(existingUser.email === email) 
      userFound = true
  }
  if(userFound) {
    alert('User already exists')
    return
  }

  var nameInput = registerForm.querySelector('#name')
  var name  = nameInput.value
  var passwordInput = registerForm.querySelector('#password')
  var password = passwordInput.value

  var newUser = {}
  newUser.name = name
  newUser.email = email
  newUser.password = password
  
  existingUsers.push(newUser)

  nameInput.value = ''
  emailInput.value = ''
  passwordInput.value = ''

  loginView.style.display = 'block'
  registerView.style.display = 'none'
  //nameInput value line 43 Manu??
  }

var loginView = document.getElementById('login')
var loginForm = loginView.querySelector('form')
var loginRegisterLink  = loginView.querySelector('a')

loginRegisterLink.onclick = function(event) {
  event.preventDefault()

  registerView.style.display = 'block'
  loginView.style.display = 'none'
}

loginForm.onsubmit = function(event) {
  event.preventDefault()

  var emailInput = loginForm.querySelector('#email')
  email = emailInput.value

  var foundUser = null

  for(var i=0; i<existingUsers.length && !foundUser; i++) {
    var existingUser = existingUsers[i]

    if(existingUser.email === email)
      foundUser = existingUser
  }
  
  if(!foundUser) {
    alert('User not found')

    return
  }
  var passwordInput = loginForm.querySelector('#password')
  password =  passwordInput.value

  if(foundUser.password !== password){
    alert('Wrong credentials')

    return
  }
  
  emailInput.value=''
  passwordInput.value=''

  var homeTitle = homeView.querySelector('h1')

  homeTitle.innerText = 'Hello, ' +foundUser.name + '!'

  loginView.style.display = 'none'
  homeView.style.display = 'block'
}

var homeView = document.getElementById('home')
homeView.style.display = 'none'